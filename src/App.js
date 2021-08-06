import './App.css';
import { Header } from './components/Header';
import { Wall } from './components/Wall';
import { Footer } from './components/Footer';
import { Route } from 'react-router';
import { Todo } from './components/Todo';
import { Seartch } from './components/Seartch';
import { Reposts } from './components/Reposts';

function App() {
  return (
    <div className="container">
      <Header/>

      <Route exact path='/' component={Wall}/>
      <Route exact path='/Todo' component={Todo}/>
      <Route exact path='/seartch' component={Seartch}/>
      <Route exact path='/Reposts' component={Reposts}/>

    
      <Footer/>
      
    </div>
  );
}

export default App;
//seartch