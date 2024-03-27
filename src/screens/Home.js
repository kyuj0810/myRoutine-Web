import { logUserOut } from '../apollo';

function Home() {
  return (
    <div>
      <h1>Weclome we did it!</h1>
      <button onClick={() => logUserOut()}>Log in out!</button>
    </div>
  );
}
export default Home;
