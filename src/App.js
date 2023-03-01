import './App.css';
import Expensetracker from './components/expense/Expensetracker';
import meraStore from './components/store/Store';
import { Provider } from 'react-redux';

function App() {
  return <>
      <Provider store={meraStore}>
        <Expensetracker />
      </Provider>
  </>
}

export default App;
