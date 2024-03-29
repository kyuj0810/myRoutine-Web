import { useNavigate } from 'react-router-dom';
import { logUserOut } from '../apollo';

function Home() {
  const location = useNavigate();

  return (
    <div>
      <h1>Weclome we did it!</h1>
      <button onClick={() => logUserOut(location)}>Log in out!</button>
    </div>
  );
}
export default Home;
