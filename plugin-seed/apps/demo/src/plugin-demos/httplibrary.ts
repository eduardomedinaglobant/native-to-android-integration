import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHttplibrary } from '@demo/shared';
import { Httplibrary } from '@nativescript/httplibrary';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHttplibrary {
	
	start():void {
		Httplibrary.getSeries()
		//Httplibrary.getSeriesRx()
		//Httplibrary.getSeriesRx2()
	}
}
