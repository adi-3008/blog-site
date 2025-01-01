import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout} from './components'
import { AddPost, AllPosts, EditPost, Login, SignUp, Home, Post} from './pages'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>  
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<AuthLayout authentication={false}><Login/></AuthLayout>}/>
          <Route path='/signUp' element={<AuthLayout authentication={false}><SignUp/></AuthLayout>}/>
          <Route path='/all-posts' element={<AuthLayout authentication><AllPosts/></AuthLayout>}/>
          <Route path='/add-post' element={<AuthLayout authentication><AddPost/></AuthLayout>}/>
          <Route path='/edit-post/:slug' element={<AuthLayout authentication><EditPost/></AuthLayout>}/>
          <Route path='/post/:slug' element={<AuthLayout authentication><Post/></AuthLayout>}/>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
)
