import './App.css';
import { Navigation } from './components/prototype/Navigation';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ServiceList } from "./components/model/service/ServiceList";
import { CustomerList } from './components/model/customer/CustomerList';
import { ContractList } from './components/model/contract/ListContract';

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

            <Route path="/contract" element={<Outlet />}>
              <Route index element={<ContractList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
