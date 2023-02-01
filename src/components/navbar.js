import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import useAuth from '../hooks/useAuth'

import UserDropdownMenu from './UserDropdownMenu'
import DarkModeToggle from './DarkModeToggle'

function NavBar() {
  const { user, logout } = useAuth()

  const logoutHandler = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <Popover className="relative border-b-2 border-gray-100 dark:border-gray-700 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/" className="text-indigo-600 dark:text-white">
                <span className="sr-only">CheckIt</span>
                <i className="icon-checkit text-4xl"></i>
              </NavLink>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <NavLink to="/" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
                Home
              </NavLink>
              <NavLink to="/boards" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
                Boards
              </NavLink>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {!user && <NavLink to="/login" className="whitespace-nowrap text-base font-medium text-gray-500 dark:text-white hover:text-gray-900">
                Log In
              </NavLink>}
              {!user && <NavLink to="/signup" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Sign up
              </NavLink>}
              {user && <UserDropdownMenu logout={logoutHandler} />}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8"></nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-4 gap-y-4 gap-x-8">
                  <NavLink to="/" className="col-span-6 text-base font-medium text-gray-900 hover:text-gray-700">
                    Home
                  </NavLink>
                  <NavLink to="/boards" className="col-span-6 text-base font-medium text-gray-900 hover:text-gray-700">
                    Boards
                  </NavLink>
                </div>
                {!user && <div className='text-center text-base font-medium'>
                  <NavLink to="/signup" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Sign up
                  </NavLink>
                  <NavLink to="/login" className="block mt-6 text-indigo-600 hover:text-indigo-500">
                    Log In
                  </NavLink>
                </div>}
                {user && <div className="grid grid-cols-4 gap-y-4 gap-x-8 border-t pt-4">
                  <p className='col-span-6 text-base font-medium text-gray-900 '>Hi {user.first_name}!</p>
                  <NavLink to="#" className="col-span-6 text-base font-medium text-gray-900 hover:text-gray-700">
                    Account settings
                  </NavLink>
                  <div className='col-span-6'>
                  <DarkModeToggle>
                    <span className="ml-3 text-gray-900 dark:text-gray-300 mobile_nav--dark-mode-text">Dark Mode</span>
                  </DarkModeToggle>
                  </div>
                  <NavLink to="#" onClick={logoutHandler} className="col-span-6 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700">
                    Logout
                  </NavLink>
                </div>}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default NavBar