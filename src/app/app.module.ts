import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from '@store/counter.store';
import { CounterComponent } from './components/counter/counter.component';
import { modules } from './modules/modules';

/**
 * Main module of the application.
 */
@NgModule({
    declarations: [AppComponent, CounterComponent],
    imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers), ...modules],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
