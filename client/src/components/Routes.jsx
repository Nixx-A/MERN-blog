import { Route, Routes } from 'react-router-dom'
import { Posts } from '../pages/posts/Posts'
import { LoginPage } from '../pages/auth/LoginPage'
import { Methods } from '../pages/auth/Methods'
import { RegisterForm } from '../pages/auth/RegisterFormPage'
import { SearchPage } from '../pages/SearchPage'
import { TagsPage } from '../pages/TagsPage'
import { Faq } from '../pages/Faq'
import { About } from '../pages/About'
import { Podcasts } from '../pages/Podcasts'
import { TagPostsPage } from '../pages/TagPostsPage'
import { Post } from '../pages/posts/Post'
import { ProfilePage } from '../pages/ProfilePage'
import { SettingsPage } from '../pages/profile/SettingsPage'
import { SettingsCustomization } from '../pages/profile/SettingsCustomization'
import { SignoutConfirm } from '../pages/auth/SignoutConfirm'
import { PostFormPage } from '../pages/posts/PostFormPage'
import { ProtectedRoute } from '../ProtectedRoute'
import { Error404 } from '../pages/404'
import { LatestPosts } from '../pages/posts/LatestPosts'
import { TopPosts } from '../pages/posts/TopPosts'

export function MainRoutes () {
  const routes = [
    { path: '/', element: <Posts /> },
    { path: '/latest', element: <LatestPosts /> },
    { path: '/top-week', element: <TopPosts /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <Methods /> },
    { path: '/register-form', element: <RegisterForm /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/tags', element: <TagsPage /> },
    { path: '/faq', element: <Faq /> },
    { path: '/about', element: <About /> },
    { path: '/podcasts', element: <Podcasts /> },
    { path: '/tag/:tagId/:tagName', element: <TagPostsPage /> },
    { path: '/post/:postId', element: <Post /> },
    { path: '/profile/:userId', element: <ProfilePage /> }
  ]

  const protectedRoutes = [
    { path: '/settings/profile/', element: <SettingsPage /> },
    { path: '/settings/customization', element: <SettingsCustomization /> },
    { path: 'signout-confirm', element: <SignoutConfirm /> },
    { path: '/new', element: <PostFormPage /> },
    { path: '/posts/:id', element: <PostFormPage /> }
  ]

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route element={<ProtectedRoute />}>
        {protectedRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
