import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'finanzas-vlv',
        appId: '1:520471745398:web:b45d6db7915f7e2e24e057',
        storageBucket: 'finanzas-vlv.appspot.com',
        apiKey: 'AIzaSyAhmdd4YuHRtqqZuJ3oG0rcY0DNzDbAGyk',
        authDomain: 'finanzas-vlv.firebaseapp.com',
        messagingSenderId: '520471745398',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
