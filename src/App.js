import './App.css';
import './pages/Homepage';
import Homepage from './pages/Homepage';
import Routes from './pages/Routes';
import {ProductProvider} from '../src/components/Context';

function App() {
  return (
    // <ProductProvider>
      // <BrowserRouter>
      <div className="App">
        <Routes/>
      </div>
      // </BrowserRouter>
    // </ProductProvider>
  );
}

export default App;
