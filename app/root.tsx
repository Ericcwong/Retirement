import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import styleSheet from "~/tailwind.css"
import { ThemeProvider, useTheme } from "~/utils/theme-provider"
import { Navigation } from "~/components/index"
import clsx from "clsx"
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styleSheet },

  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

function App() {
  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white ">
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}
