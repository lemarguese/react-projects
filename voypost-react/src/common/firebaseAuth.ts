import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import firebaseApp from './firebaseApp';

const auth = getAuth(firebaseApp);

const register = async (email: string, password: string, fullName: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(response.user, {
      displayName: fullName,
    });
  } catch (err) {
    alert(err);
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    alert(err);
  }
};

export { logout, login, register, auth };
