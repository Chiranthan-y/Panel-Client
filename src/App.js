import './App.css';
import {Provider} from 'react-redux';

import store from './Redux/store';
import Routing from './Routing';

const App = () => (
	<Provider store={store}>
		<Routing />
	</Provider>
);

export default App;
