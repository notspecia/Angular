import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NostriCorsiComponent } from './pages/nostri-corsi/nostri-corsi.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { AmministrazioneComponent } from './pages/amministrazione/amministrazione.component';

// rotte delle pagine dell'applicazione, navigabili attraverso il componente navbar.component
export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "nostri-corsi", component: NostriCorsiComponent },
    { path: "chi-siamo", component: ChiSiamoComponent },
    { path: "amministrazione", component: AmministrazioneComponent },
    { path: "**", component: HomeComponent },
];
