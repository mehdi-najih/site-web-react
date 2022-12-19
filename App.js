
import './App.css';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import {Container} from './cpmponents/index'
import {  Footer , Header,FeatturedGames } from './sections/index';
import { Home, Profile } from './Pages/index';


function App() {
  return (
    <>

   
    <Router> 

   
      <Header />
   <Container>
    <Routes>
  
    <Route  path='/' element={<Home />}/>
    <Route  path='/profile' element={<Profile />}/>
    <Route  path='/featturedGames' element={<FeatturedGames />}/>

    </Routes>

   </Container>
  <Footer />
  </Router>
  </>
  );
}

export default App;
