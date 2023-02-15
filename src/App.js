import  Routes  from './router/Routes';
import './App.css';
import {RouterProvider} from 'react-router-dom';


function App() {
  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
