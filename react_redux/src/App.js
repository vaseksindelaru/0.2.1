import Navbar from "./components/Navbar";
import UserList from "./components/userList";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
     <Navbar />
     <UserList />
  </Provider>
  );
}

export default App;
