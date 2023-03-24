import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Bookmarks from './pages/Bookmarks.jsx';

function App() {

  const LayOut = () => {
    return (
      <div className='mainContainer' >
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path : '/',
      element : <LayOut/>,
      children : [
        {path : '/', element : <Home/>},
        {path : '/bookmarks' , element : <Bookmarks/>}
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
