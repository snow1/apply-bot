import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Filter, Settings, Monitor, Sun, Moon } from 'lucide-react'
import { useThemeStore } from '@/store/themeStore'
import logo from '/logo.svg'

export default function Sidebar() {
  const location = useLocation()
  const { theme, cycleTheme } = useThemeStore()

  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/filters', icon: Filter, label: 'Filters' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ]

  const getThemeIcon = () => {
    if (theme === 'auto') {
      return <Monitor size={16} />
    } else if (theme === 'light') {
      return <Sun size={16} />
    } else {
      return <Moon size={16} />
    }
  }

  const getThemeLabel = () => {
    if (theme === 'auto') {
      return 'Auto'
    } else if (theme === 'light') {
      return 'Light'
    } else {
      return 'Dark'
    }
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden lg:block">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <span className="font-bold text-xl text-gray-900 dark:text-white">Apply Bot</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Theme Toggle at bottom */}
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={cycleTheme}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={`Theme: ${getThemeLabel()}`}
          >
            {getThemeIcon()}
            <span className="text-sm font-medium">{getThemeLabel()}</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
