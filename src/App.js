import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import Profile from './profile';
import LogoutButton from './logout';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
    </div>
  );
}

export default App;
