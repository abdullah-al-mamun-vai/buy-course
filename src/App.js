import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Root';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
