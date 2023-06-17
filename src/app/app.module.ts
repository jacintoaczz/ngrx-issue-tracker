import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from '@app/store';
import { CounterComponent } from '@components/counter/counter.component';
import { modules } from './modules/modules';
import { IssuesComponent } from '@components/issues/issues.component';
import { NewIssueComponent } from '@components/new-issue/new-issue.component';

/**
 * Main module of the application.
 */
@NgModule({
    declarations: [AppComponent, CounterComponent, IssuesComponent, NewIssueComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, StoreModule.forRoot(reducers), ...modules],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
