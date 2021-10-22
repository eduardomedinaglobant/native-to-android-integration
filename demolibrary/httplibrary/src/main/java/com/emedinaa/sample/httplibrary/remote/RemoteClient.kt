package com.emedinaa.sample.httplibrary.remote

import okhttp3.OkHttpClient
import okhttp3.Request

/**
 * @author Eduardo Medina
 */
internal class RemoteClient(private val url:String) {
    //private const val URL = "https://ancient-escarpment-14693.herokuapp.com"

    val httpClient by lazy {
        OkHttpClient.Builder()
            .addInterceptor(LoggingInterceptor())
            .build()
    }

    private fun buildGetRequest(api: String): Request {
        return Request.Builder().apply {
            get()
            url(url.plus(api))
        }.build()
    }

    fun getRequest(api: String) = buildGetRequest(api)

}