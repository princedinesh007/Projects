import { ApplicationConfig,provideZoneChangeDetection,} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  projectId: 'chatapp-3a418',
  appId: '1:1083756577006:web:21a6dd8da05574c845b3ff',
  storageBucket: 'chatapp-3a418.appspot.com',
  apiKey: 'AIzaSyC2_3f3aGMd4c_C0HGb7mubG8F_AVwZkiY',
  authDomain: 'chatapp-3a418.firebaseapp.com',
  messagingSenderId: '1083756577006',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
