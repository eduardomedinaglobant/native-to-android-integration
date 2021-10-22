package com.emedinaa.sample.httplibrary

import com.emedinaa.sample.httplibrary.remote.RemoteClient
import io.reactivex.Observable
import io.reactivex.Scheduler
import io.reactivex.Single
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.Response

/**
 * @author Eduardo Medina
 */
internal class DefaultNativeHttpClient(private val url:String,
private val remoteClient: RemoteClient):NativeHttpClient {

    private val coroutineScope = CoroutineScope(Dispatchers.Main)

    override fun get(endpoint: String,networkingCallback:NetworkingCallback<String>) {

        coroutineScope.launch {
            var body:String = ""
            try {
                withContext(Dispatchers.IO) {
                    val result = remoteClient.httpClient.newCall(remoteClient.getRequest(endpoint)).execute()
                    if(result.isSuccessful) {
                        body= result.body?.string()?:""
                    }
                }
                //main thread
                networkingCallback.onSuccess(body)
            }catch (exception:Exception) {
                networkingCallback.onFailure(exception)
            }
        }
    }


    override fun getRx(endpoint: String, networkingCallback: NetworkingCallback<String>) {

       val observable = Observable.just(
            remoteClient.httpClient.newCall(remoteClient.getRequest(endpoint)).execute()
       )
        observable.subscribeOn(Schedulers.io())
        .observeOn(AndroidSchedulers.mainThread())
        .subscribe({ data->
            val body:String = data.body?.string()?:""
            networkingCallback.onSuccess(body)
        }, { error ->
            networkingCallback.onFailure(Exception(error))
        })
    }

    override fun getRx2(endpoint: String, networkingCallback: NetworkingCallback<String>) {
        val observable = Observable.just(
            remoteClient.httpClient.newCall(remoteClient.getRequest(endpoint)).execute().body?.string()?:""
        )
        observable.subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe({ data->
                networkingCallback.onSuccess(data)
            }, { error ->
                networkingCallback.onFailure(Exception(error))
            })
    }

    override fun cancel() {
        coroutineScope.cancel()
    }
}