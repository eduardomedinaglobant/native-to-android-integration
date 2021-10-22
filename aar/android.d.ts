/// <reference path="android-declarations.d.ts"/>

declare module a {
	export class a extends com.emedinaa.sample.httplibrary.NativeHttpClient {
		public static class: java.lang.Class<a.a>;
		public a: kotlinx.coroutines.CoroutineScope;
		public b: b.b;
		public constructor(param0: string, param1: b.b);
		public getRx2(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
		public getRx(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
		public get(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
		public cancel(): void;
	}
	export module a {
		export class a extends kotlin.coroutines.jvm.internal.SuspendLambda implements kotlin.jvm.functions.Function2<kotlinx.coroutines.CoroutineScope,kotlin.coroutines.Continuation<any>,any>  {
			public static class: java.lang.Class<a.a.a>;
			public a: any;
			public b: number;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: a.a, param1: string, param2: com.emedinaa.sample.httplibrary.NetworkingCallback<any>, param3: kotlin.coroutines.Continuation);
		}
		export module a {
			export class a extends kotlin.coroutines.jvm.internal.SuspendLambda implements kotlin.jvm.functions.Function2<kotlinx.coroutines.CoroutineScope,kotlin.coroutines.Continuation<any>,any>  {
				public static class: java.lang.Class<a.a.a.a>;
				public constructor(param0: a.a.a, param1: kotlin.jvm.internal.Ref.ObjectRef, param2: kotlin.coroutines.Continuation);
				public create(param0: any, param1: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class b<T>  extends io.reactivex.functions.Consumer<okhttp3.Response> {
			public static class: java.lang.Class<a.a.b<any>>;
			public accept(param0: any): void;
			public constructor(param0: com.emedinaa.sample.httplibrary.NetworkingCallback<any>);
		}
		export class c<T>  extends io.reactivex.functions.Consumer<java.lang.Throwable> {
			public static class: java.lang.Class<a.a.c<any>>;
			public accept(param0: any): void;
			public constructor(param0: com.emedinaa.sample.httplibrary.NetworkingCallback<any>);
		}
		export class d<T>  extends io.reactivex.functions.Consumer<string> {
			public static class: java.lang.Class<a.a.d<any>>;
			public accept(param0: any): void;
			public constructor(param0: com.emedinaa.sample.httplibrary.NetworkingCallback<any>);
		}
		export class e<T>  extends io.reactivex.functions.Consumer<java.lang.Throwable> {
			public static class: java.lang.Class<a.a.e<any>>;
			public accept(param0: any): void;
			public constructor(param0: com.emedinaa.sample.httplibrary.NetworkingCallback<any>);
		}
	}
}

declare module b {
	export class a {
		public static class: java.lang.Class<b.a>;
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
}

declare module b {
	export class b {
		public static class: java.lang.Class<b.b>;
		public b: string;
		public a(): okhttp3.OkHttpClient;
		public a(param0: string): okhttp3.Request;
		public constructor(param0: string);
	}
	export module b {
		export class a extends kotlin.jvm.internal.Lambda implements kotlin.jvm.functions.Function0<okhttp3.OkHttpClient>  {
			public static class: java.lang.Class<b.b.a>;
			public static a: b.b.a;
			public static <clinit>(): void;
			public constructor();
			public invoke(): any;
		}
	}
}

declare module com {
	export module emedinaa {
		export module sample {
			export module httplibrary {
				export class NativeHttpClient {
					public static class: java.lang.Class<com.emedinaa.sample.httplibrary.NativeHttpClient>;
					/**
					 * Constructs a new instance of the com.emedinaa.sample.httplibrary.NativeHttpClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
						getRx(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
						getRx2(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
						cancel(): void;
					});
					public constructor();
					public getRx(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public getRx2(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public get(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public cancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module emedinaa {
		export module sample {
			export module httplibrary {
				export class NativeWrapper extends com.emedinaa.sample.httplibrary.NativeHttpClient {
					public static class: java.lang.Class<com.emedinaa.sample.httplibrary.NativeWrapper>;
					public constructor(param0: string);
					public getRx(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public getRx2(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public get(param0: string, param1: com.emedinaa.sample.httplibrary.NetworkingCallback<string>): void;
					public cancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module emedinaa {
		export module sample {
			export module httplibrary {
				export class NetworkingCallback<String>  extends java.lang.Object {
					public static class: java.lang.Class<com.emedinaa.sample.httplibrary.NetworkingCallback<any>>;
					/**
					 * Constructs a new instance of the com.emedinaa.sample.httplibrary.NetworkingCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: string): void;
						onFailure(param0: java.lang.Exception): void;
					});
					public constructor();
					public onFailure(param0: java.lang.Exception): void;
					public onSuccess(param0: string): void;
				}
			}
		}
	}
}

//Generics information:
//a.a.b:1
//a.a.c:1
//a.a.d:1
//a.a.e:1
//com.emedinaa.sample.httplibrary.NetworkingCallback:1

