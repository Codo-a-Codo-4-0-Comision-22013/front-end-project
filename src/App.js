import './App.css';
// import Profile from './components/profile/ProfileClass';
// import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-2 px-2">

      {/* <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }} /> */}
        {/* <AuthPage/> */}

        <HomePage/>

    </div>
  );
}

export default App;
