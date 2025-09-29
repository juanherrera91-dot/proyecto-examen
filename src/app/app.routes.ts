import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'servicios', component: Services },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: '' }
];