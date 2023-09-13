import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Importa AngularFireStorage desde la ubicación correcta
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  constructor(private storage: AngularFireStorage) {}

  getImageUrl(path: string): Observable<string | null> {
    const ref = this.storage.ref(path);
    return ref.getDownloadURL();
  }
}
