import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useGlobalContext } from './context'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle

// import { useGlobalContext } from './context'
// import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
// const ThemeToggle = () => {
//   const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
//   return (
//     <section className="toggle-container">
//       <button className="dark-toggle" onClick={toggleDarkTheme}>
//         {isDarkTheme ? (
//           <BsFillMoonFill className="toggle-icon" />
//         ) : (
//           <BsFillSunFill className="toggle-icon" />
//         )}
//       </button>
//     </section>
//   )
// }
// export default ThemeToggle
