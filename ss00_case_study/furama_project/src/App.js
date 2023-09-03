import './App.css';
import { Navigation } from './components/prototype/Navigation';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ServiceList } from "./components/model/service/ServiceList";
import { CustomerList } from './components/model/customer/CustomerList';

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Outlet />}>
              <Route index element={<ServiceList />} />
            </Route>

            <Route path="/customer" element={<Outlet />}>
              <Route index element={<CustomerList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
