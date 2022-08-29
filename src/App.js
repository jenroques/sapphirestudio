
import './App.css';
import Home from './Home'
import bootstrap from 'bootstrap';
import { MDBAnimation } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App"  >
      <header className="App-header">
        <MDBAnimation
          reset={true}
          tag='i'
          animation='fade-in'
          start='onLoad'
          duration={2000}
        >
          <Home />
        </MDBAnimation>

      </header>
    </div>
  );
}

export default App;
