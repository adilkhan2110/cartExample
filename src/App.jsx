import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css'
import Main from './component/Main'
import CartView from "./component/CartView";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/cart',
    element: <CartView />
  },


])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
