import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './environment/firebaseConfig'; // Adjust the path if needed
import { DataService } from './services/dataService'; // Adjust the path if needed
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideRouter(routes) // <-- ajoute cette ligne
  ]
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit { // <-- Implémente OnInit
  protected title = 'DominiqueSiteAuteure';
  livres: any[] = [];

  constructor(private dataService: DataService) { } // <-- Injecte le service

  ngOnInit() {

  }
  getLivres() {
    this.dataService.getLivres().subscribe((livres: any[]) => {
      this.livres = livres;

      this.livres.forEach(livre => console.log(livre.Titre));
      console.log('Livres chargés:', this.livres.length);
    });

  }
}
