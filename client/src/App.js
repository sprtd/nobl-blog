import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/globalStyle'
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' />
        </Switch>
      <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
