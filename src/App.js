import {Main} from './components/Main';
import {Route, Switch } from 'react-router-dom';

import "./App.scss"

function App() {
	return (
	  <main>
		<Switch>
		  <Route path="/" component={Main} />
		</Switch>
	  </main>
	);
  }

export default App;
