import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ProfilePage } from './pages/ProfilePage'
import { PostFormPage } from './pages/PostFormPage'
import { Navbar } from './components/Navbar'

export default function App () {
  return (
    <BrowserRouter>

    <main className='bg-gray-200 h-screen w-screen  overflow-x-hidden'>
    <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
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
