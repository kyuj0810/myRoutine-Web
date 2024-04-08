import { useNavigate } from 'react-router-dom';
import { logUserOut } from '../apollo';
import routes from '../routes';

function Home() {
  const location = useNavigate();
  const goRoutineCreate = () => {
    location(routes.routineCreate);
  };

  return (
    <div>
      <h1>Weclome we did it!</h1>
      <button onClick={() => logUserOut(location)}>Log in out!</button>
      <button onClick={() => goRoutineCreate(location)}>루틴 생성</button>
    </div>
  );
}
export default Home;
