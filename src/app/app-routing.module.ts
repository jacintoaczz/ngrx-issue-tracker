import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from '@components/issues/issues.component';
import { IssueDetailComponent } from '@components/issue-detail/issue-detail.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'issues' },
    { path: 'issues', component: IssuesComponent },
    { path: 'issues/:id', component: IssueDetailComponent },
    {
        path: 'settings',
        loadChildren: () =>
            import('./settings/settings.module' /* webpackChunkName: "settings_module" */).then(
                (m) => m.SettingsModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
