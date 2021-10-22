package com.emedinaa.sample.httplibrary

import androidx.annotation.Keep

/**
 * @author Eduardo Medina
 */
@Keep
interface NetworkingCallback<String> {

    fun onSuccess(data: kotlin.String)

    fun onFailure(exception: Exception)
}