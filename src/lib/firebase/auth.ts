import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  User as FirebaseUser,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';
import type { User } from '@/types';

// Converter usuário do Firebase para nosso tipo
export const convertFirebaseUser = async (firebaseUser: FirebaseUser): Promise<User> => {
  const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
  const userData = userDoc.data();

  return {
    id: firebaseUser.uid,
    email: firebaseUser.email!,
    name: firebaseUser.displayName || userData?.name || '',
    avatar: firebaseUser.photoURL || userData?.avatar,
    createdAt: userData?.createdAt?.toDate() || new Date(),
    updatedAt: userData?.updatedAt?.toDate() || new Date(),
  };
};

// Criar conta
export const signUp = async (email: string, password: string, name: string): Promise<User> => {
  try {
    const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
    
    // Atualizar perfil do Firebase
    await updateProfile(firebaseUser, { displayName: name });
    
    // Criar documento do usuário no Firestore
    const userData = {
      name,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    await setDoc(doc(db, 'users', firebaseUser.uid), userData);
    
    return convertFirebaseUser(firebaseUser);
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    throw error;
  }
};

// Fazer login
export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
    return convertFirebaseUser(firebaseUser);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Fazer logout
export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

// Atualizar perfil
export const updateUserProfile = async (
  userId: string,
  data: { name?: string; avatar?: string }
): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuário não autenticado');

    // Atualizar perfil do Firebase
    if (data.name || data.avatar) {
      await updateProfile(user, {
        displayName: data.name,
        photoURL: data.avatar,
      });
    }

    // Atualizar documento no Firestore
    await setDoc(
      doc(db, 'users', userId),
      {
        ...data,
        updatedAt: new Date(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    throw error;
  }
};

// Observer de mudanças de autenticação
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const user = await convertFirebaseUser(firebaseUser);
        callback(user);
      } catch (error) {
        console.error('Erro ao converter usuário:', error);
        callback(null);
      }
    } else {
      callback(null);
    }
  });
};