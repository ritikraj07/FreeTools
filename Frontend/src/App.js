import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './Source/Router/AllRoutes';
import Navbar from './Source/Components/Navbar';
import store from './Source/Redux/Store';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store} >
        <Navbar />
        <AllRoutes />
    </Provider>
      </BrowserRouter>
    
  );
}

export default App;
