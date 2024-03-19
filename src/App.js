import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from './apollo';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
