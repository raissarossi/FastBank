import React, { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ToggleTheme = () => {
  const pageRef = document.documentElement.classList
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(systemThemePreference)

  useEffect(() => {
    dark && pageRef.add('dark')
  }, [])

  const toggleTheme = () => {
    pageRef.toggle('dark')
    setDark(!dark)
  }

  return (
    <div>
      <SunIcon className='w-7 h-7 text-black cursor-pointer hidden dark:block m-3' onClick={toggleTheme} />
      <MoonIcon className='w-6 h-6 text-white cursor-pointer block dark:hidden m-3' onClick={toggleTheme} />
    </div>
  )
}

export default ToggleTheme
