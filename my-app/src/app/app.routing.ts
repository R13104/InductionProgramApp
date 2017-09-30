import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    FrontendResourceComponent,
    PageNotFoundComponent,
    WelcomeComponent,
} from './components'
import {AppComponent} from './app.component';

export const routes: Routes = [
    { 
        path: 'frontend-resources',
        component: FrontendResourceComponent,
    },
    { 
        path: 'welcome',
        component: WelcomeComponent,
    },    
    { 
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full',
    },
    { 
        path: '**',
        component: PageNotFoundComponent,
    },    
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });