package com.emedinaa.sample.httplibrary

import androidx.annotation.Keep
import com.emedinaa.sample.httplibrary.remote.RemoteClient

/**
 * @author Eduardo Medina
 */
@Keep
class NativeWrapper(private val url:String):NativeHttpClient {

    private val nativeHttpClient:NativeHttpClient

    init {
        nativeHttpClient = DefaultNativeHttpClient(url, RemoteClient(url))
    }

    override fun get(endpoint: String,networkingCallback:NetworkingCallback<String>) {
        nativeHttpClient.get(endpoint,networkingCallback)
    }

    override fun getRx(endpoint: String, networkingCallback: NetworkingCallback<String>) {
        nativeHttpClient.getRx(endpoint,networkingCallback)
    }

    override fun getRx2(endpoint: String, networkingCallback: NetworkingCallback<String>) {
        nativeHttpClient.getRx2(endpoint,networkingCallback)
    }

    override fun cancel() {
        nativeHttpClient.cancel()
    }
}