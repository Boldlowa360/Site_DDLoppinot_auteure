import 'zone.js'; // <--- Ajoute cette ligne tout en haut
import { bootstrapApplication } from '@angular/platform-browser';
import { App, appConfig } from './app/app';

bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));