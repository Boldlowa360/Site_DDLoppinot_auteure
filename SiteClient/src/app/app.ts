import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './environment/firebaseConfig'; // Adjust the path if needed
import { DataService } from './services/dataService'; // Adjust the path if needed


export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
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

  constructor(private dataService: DataService) {} // <-- Injecte le service

  ngOnInit() {
    this.dataService.getLivres().subscribe((livres: any[]) => {
      this.livres = livres;
      // Tu peux faire un console.log pour vérifier
      console.log(this.livres);
    });
  }
}
