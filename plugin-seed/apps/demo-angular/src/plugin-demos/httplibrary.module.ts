import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HttplibraryComponent } from './httplibrary.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HttplibraryComponent }])],
  declarations: [HttplibraryComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class HttplibraryModule {}
