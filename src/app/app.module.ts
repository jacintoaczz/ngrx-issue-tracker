import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from '@app/store';
import { CounterComponent } from '@components/counter/counter.component';
import { modules } from './modules/modules';
import { IssuesComponent } from '@components/issues/issues.component';
import { NewIssueComponent } from '@components/new-issue/new-issue.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';

/**
 * Main module of the application.
 */
@NgModule({
    declarations: [AppComponent, CounterComponent, IssuesComponent, NewIssueComponent, IssuesListComponent, IssueDetailComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        ...modules,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
