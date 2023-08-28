import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/auth/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { PostFormPage } from './pages/PostFormPage'
import { Navbar } from './components/Navbar'
import { SearchPage } from './pages/SearchPage'
import { Methods } from './pages/auth/Methods'
import { RegisterForm } from './pages/auth/RegisterFormPage'
import { AuthProvider } from './context/AuthContext'
import { SignoutConfirm } from './pages/auth/SignoutConfirm'
import { ProtectedRoute } from './ProtectedRoute'

export default function App () {
  return (
    <AuthProvider>
      <BrowserRouter>

        <main className='bg-[#f5f5f5] h-screen w-screen  overflow-x-hidden'>
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Methods />} />
            <Route path='/register-form' element={<RegisterForm />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='*' element={<HomePage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='signout-confirm' element={<SignoutConfirm />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/add-post' element={<PostFormPage />} />
              <Route path='/posts/:id' element={<PostFormPage />} />
            </Route>
          </Routes>

        </main>
      </BrowserRouter>
    </AuthProvider>
  )
}
