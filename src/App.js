import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { client, darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTeme, lightTheme } from './styles';
import SignUp from './screens/SignUp';
import routes from './routes';
import { HelmetProvider } from 'react-helmet-async';
import RoutineCreate from './screens/RoutineCreate';
import Layout from './components/Layout';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTeme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route
                path={routes.home}
                element={
                  isLoggedIn ? (
                    <Layout>
                      <Home />
                    </Layout>
                  ) : (
                    <Login />
                  )
                }
              />
              {!isLoggedIn ? (
                <Route path={routes.signUp} element={<SignUp />} />
              ) : null}
              {isLoggedIn ? (
                <Route
                  path={routes.routineCreate}
                  element={<RoutineCreate />}
                />
              ) : null}
              <Route path="*" element={<NotFound />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
