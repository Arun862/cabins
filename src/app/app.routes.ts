import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    },
    {
        path: "aboutus", 
        component: AboutusComponent
    },
];
