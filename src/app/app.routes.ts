import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path:'',
        loadComponent: ()=> import('./pages/home-page/home-page.component').then((m)=> m.HomePageComponent)
    },
    {
        path:'test',
        loadComponent: ()=> import('./components/test/test.component').then((m)=> m.TestComponent)
    },
    {
        path:'**', redirectTo:'',pathMatch:'full'
    }
    
];
