import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/prototype/Navigation';
import { ServiceList } from './components/model/service/ServiceList';

function App() {
  return (
    <>
      <Navigation />
      <ServiceList />
    </>

  );
}

export default App;
