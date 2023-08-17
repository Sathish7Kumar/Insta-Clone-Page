import './App.css';
import Body from './components/Body';
import FollowPage from './components/FollowPage';
import NavBar from './components/NavBar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/follow-friends' element={<FollowPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
