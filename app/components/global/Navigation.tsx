import { Link } from "@remix-run/react"
import DarkModeIcon from "~/assets/dark-mode.png"
import LightModeIcon from "~/assets/light-mode.png"
import { Theme, useTheme } from "~/utils/theme-provider"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Retirement
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <ThemeButton />
      </div>
    </nav>
  )
}
const ThemeButton = () => {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    console.log("clicked")
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    )
  }
  return (
    <div className="transition-opacity duration-300">
      {theme === Theme.LIGHT ? (
        <button onClick={toggleTheme}>
          <img src={LightModeIcon} alt="light mode" width={30} height={30} />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <img src={DarkModeIcon} alt="dark mode" width={30} height={30} />
        </button>
      )}
    </div>
  )
}
