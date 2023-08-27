import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { PostFormPage } from './pages/PostFormPage'
import { Navbar } from './components/Navbar'
import { SearchPage } from './pages/SearchPage'
import { Methods } from './pages/Methods'
import { RegisterForm } from './pages/RegisterFormPage'

export default function App () {
  return (
    <BrowserRouter>

      <main className='bg-[#f5f5f5] h-screen w-screen  overflow-x-hidden a '>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Methods />} />
          <Route path='/register-form' element={<RegisterForm />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<HomePage />} />

          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/posts' element={<HomePage />} />
          <Route path='/add-post' element={<PostFormPage />} />
          <Route path='/posts/:id' element={<PostFormPage />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}
