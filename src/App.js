import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTeme, lightTheme } from './styles';
import SignUp from './screens/SignUp';
import routes from './routes';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTeme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={isLoggedIn ? <Home /> : <Login />}
          />
          {!isLoggedIn ? (
            <Route path={routes.signUp} element={<SignUp />} />
          ) : null}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
