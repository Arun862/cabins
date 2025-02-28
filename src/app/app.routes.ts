import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { OurprojectsComponent } from './pages/ourprojects/ourprojects.component';
export const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    },
    {
        path: "aboutus", 
        component: AboutusComponent
    },
    {
        path: "ourteam", 
        component: OurteamComponent
    },
    {
        path: "ourprojects", 
        component: OurprojectsComponent
    },
];
