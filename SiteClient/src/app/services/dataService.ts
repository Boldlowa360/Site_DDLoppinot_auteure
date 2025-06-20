import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private firestore: Firestore) { }

    getLivres(): Observable<any[]> {
        const itemsRef = collection(this.firestore, 'Livres');
        return collectionData(itemsRef, { idField: 'id' });
    }
}
