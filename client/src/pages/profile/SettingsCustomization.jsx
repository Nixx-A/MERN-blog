import { useNavigate } from 'react-router-dom'
import { ContentContainer } from '../../components/ui/ContentContainer'
import { SettingsSidebar } from '../../components/ui/SettingsSidebar'
import { useAuth } from '../../context/AuthContext'
import { useUser } from '../../context/UserContext'
import { useEffect, useState } from 'react'
import { ProfileNavigation } from '../../components/user/ProfileNavigation'

export function SettingsCustomization () {
  const { user } = useAuth()
  const { toggleTheme, theme, getTheme } = useUser()
  const navigate = useNavigate()
  const [customTheme, setCustomTheme] = useState(theme)

  const handleOptionChange = e => {
    e.target.value === 'Profile'
      ? navigate('/settings/profile')
      : navigate('/settings/customization')
  }

  const handleThemeChange = (e) => {
    e.preventDefault() // Corrected typo
    if (!user) setCustomTheme('light')
    const selectedTheme = e.target.value
    setCustomTheme(selectedTheme) // Update the customTheme state
    toggleTheme(selectedTheme)
  }

  useEffect(() => {
    getTheme()
  }, [customTheme])

  return (
    <ContentContainer styles={'w-[95%] m-auto flex  gap-4'}>
      <SettingsSidebar />

      <div className='flex flex-col w-full'>
        <ProfileNavigation handleOptionChange={handleOptionChange} username={user.username} />

        <form className='flex flex-col gap-4 mt-4' >
          <div className='bg-white dark:bg-[#171717]  rounded pb-2'>

            <h3 className='text-2xl font-bold p-3'>Appearance</h3>

            <div className='w-[95%] m-auto mt-6 pb-2'>
              <label htmlFor='theme' className='text-lg font-semibold'>
                Choose Theme:
              </label>
              <select
                id='theme'
                onChange={handleThemeChange} // Handle theme change
                value={theme} // Bind the selected theme to the state variable
                className='w-full rounded-md focus:border-blue-500 py-2 border-gray-300 border dark:bg-black dark:border-[#404040] dark:text-white dark:placeholder:text-gray-600 dark:focus:border-indigo-500 duration-100   outline-none placeholder:text-gray-700'
              >
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </ContentContainer>
  )
}
