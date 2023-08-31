import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='container'>
        <Todo />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
