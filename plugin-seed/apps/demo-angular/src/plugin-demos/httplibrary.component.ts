import { Component, NgZone } from '@angular/core';
import { DemoSharedHttplibrary } from '@demo/shared';
import { } from '@nativescript/httplibrary';

@Component({
	selector: 'demo-httplibrary',
	templateUrl: 'httplibrary.component.html',
})
export class HttplibraryComponent {
  
  demoShared: DemoSharedHttplibrary;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHttplibrary();
  }

}