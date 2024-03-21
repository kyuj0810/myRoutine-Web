import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTeme, lightTheme } from './styles';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTeme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
