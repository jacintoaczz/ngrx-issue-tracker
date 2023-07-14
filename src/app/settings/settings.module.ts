import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { settingsFeatureKey } from '@app/settings/store/settings.state';
import { settingsReducer } from '@app/settings/store/settings.reducer';

/**
 * Settings feature module.
 */
@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        StoreModule.forFeature(settingsFeatureKey, settingsReducer),
        ReactiveFormsModule,
    ],
})
export class SettingsModule {}
