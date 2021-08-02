import './App.css';
import { Header } from './components/Header';
import { Wall } from './components/Wall';
import { Footer } from './components/Footer';
import { Route } from 'react-router';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="container">
      <Header/>

      <Route exact path='/' component={Wall}/>
      <Route exact path='/Todo' component={Todo}/>
    
      <Footer/>
      
    </div>
  );
}

export default App;
