import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './app/hello.component';
import { AppComponent } from './app.component';
import { CounterModule } from './app/counter.module';

@NgModule({
	declarations: [
		AppComponent, HelloComponent
	],
	imports: [
		BrowserModule,
		CounterModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }