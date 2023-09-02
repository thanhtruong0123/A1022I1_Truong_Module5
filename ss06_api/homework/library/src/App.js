import logo from './logo.svg';
import './App.css';
import { Book } from './components/List';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='container'>
        <Book />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
