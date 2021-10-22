import { HttplibraryCommon } from './common';

export class Httplibrary extends HttplibraryCommon {

	static getSeries():void {
		console.log("get series from android - coroutines")
		const { NativeWrapper, NetworkingCallback } =
        com.emedinaa.sample.httplibrary;

        const httpLibrary = new NativeWrapper("https://ancient-escarpment-14693.herokuapp.com/")

        httpLibrary.get("api/marvel/series", new NetworkingCallback({
          onSuccess: (response: any) => {
            console.log(response);
          },
          onFailure: (error: java.lang.Exception) => {
            console.log(error);
          },
        }),)
	}

  static getSeriesRx2():void {
    console.log("get series from android - rx2")
    const { NativeWrapper, NetworkingCallback } =
        com.emedinaa.sample.httplibrary;

        const httpLibrary = new NativeWrapper("https://ancient-escarpment-14693.herokuapp.com/")
    
    console.log(`httpLibrary rx2 ${httpLibrary}`)
    httpLibrary.getRx2("api/marvel/series", new NetworkingCallback({
          onSuccess: (response: any) => {
            console.log(response);
          },
          onFailure: (error: java.lang.Exception) => {
            console.log(error);
          },
        }),)
  }

	static getSeriesRx():void {
		console.log("get series from android - rx")
		const { NativeWrapper, NetworkingCallback } =
        com.emedinaa.sample.httplibrary;

        const httpLibrary = new NativeWrapper("https://ancient-escarpment-14693.herokuapp.com/")
 		
 		console.log(`httpLibrary ${httpLibrary}`)
 		httpLibrary.getRx("api/marvel/series", new NetworkingCallback({
          onSuccess: (response: any) => {
            console.log(response);
          },
          onFailure: (error: java.lang.Exception) => {
            console.log(error);
          },
        }),)
	}
}
