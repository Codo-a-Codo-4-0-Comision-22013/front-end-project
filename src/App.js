import './App.css';
import Profile from './components/profile/ProfileClass';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    
    <div className="App">
      <AuthPage/>

      <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }} />
    </div>
  );
}

export default App;
