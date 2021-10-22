package com.emedinaa.sample.httplibrary

/**
 * @author Eduardo Medina
 */
interface NativeHttpClient {

    fun get(endpoint:String,networkingCallback:NetworkingCallback<String>)
    fun getRx(endpoint:String,networkingCallback:NetworkingCallback<String>)
    fun getRx2(endpoint:String,networkingCallback:NetworkingCallback<String>)
    fun cancel()
}