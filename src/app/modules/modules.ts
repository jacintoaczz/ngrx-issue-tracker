import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

/**
 * Modules to be used in development environment.
 */
export const modules = [StoreDevtoolsModule.instrument({ maxAge: 20, logOnly: !isDevMode() })];
