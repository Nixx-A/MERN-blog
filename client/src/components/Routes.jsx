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

export function MainRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Methods />} />
      <Route path="/register-form" element={<RegisterForm />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/tag/:tagId/:tagName" element={<TagPostsPage />} />
      <Route path="*" element={<Posts />} />
      <Route path="/post/:postId" element={<Post />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/settings/profile/" element={<SettingsPage />} />
        <Route path="/settings/customization" element={<SettingsCustomization />} />
        <Route path="signout-confirm" element={<SignoutConfirm />} />
        <Route path="/new" element={<PostFormPage />} />
        <Route path="/posts/:id" element={<PostFormPage />} />
      </Route>
    </Routes>
  )
}
