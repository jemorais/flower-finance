import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuração padrão para desenvolvimento
const defaultConfig = {
  apiKey: "demo-api-key",
  authDomain: "flower-finance-demo.firebaseapp.com",
  projectId: "flower-finance-demo",
  storageBucket: "flower-finance-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo-app-id",
};

// Firebase configuration for Flower Finance
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || defaultConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || defaultConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || defaultConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || defaultConfig.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || defaultConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || defaultConfig.appId,
};

// Aviso para desenvolvimento
if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  console.warn('⚠️ Usando configuração Firebase de desenvolvimento. Configure as variáveis de ambiente para produção.');
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;