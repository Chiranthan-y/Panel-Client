import './App.css';
import { Provider } from 'react-redux';

import store from './Redux/store';
import Routing from './Routing';

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
