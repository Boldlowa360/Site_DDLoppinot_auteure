import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent, pathMatch: 'full' },
];