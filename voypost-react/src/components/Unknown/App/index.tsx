import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  FirebaseAppProvider,
  useFirebaseApp,
  DatabaseProvider,
  AuthProvider,
} from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Firebase v9+
import firebaseApp from '../../../common/firebaseApp';
import theme from '../../../common/theme';
import Root from '../Root';
import { UIContextProvider } from '../UIContext';

const App: React.FC = () => {
  const app = useFirebaseApp();

  const auth = getAuth(app);
  const database = getDatabase(app);

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <FirebaseAppProvider firebaseApp={firebaseApp}>
          <ThemeProvider theme={theme}>
            <Router basename={process.env.PUBLIC_URL || '/'}>
              <CssBaseline />
              <UIContextProvider>
                <Root />
              </UIContextProvider>
            </Router>
          </ThemeProvider>
        </FirebaseAppProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
};

export default App;
