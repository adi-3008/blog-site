import './App.css'
import { useIsLoggedIn } from './hooks/useIsLoggedIn';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  
  const isLoggedIn = useIsLoggedIn();

  return <>
  {
    isLoggedIn ? <div className='min-h-screen flex flex-wrap justify-between items-center
    content-between bg-gray-400'>
      <div className='w-full block'> 
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> : null
  }
  </>
}

export default App
