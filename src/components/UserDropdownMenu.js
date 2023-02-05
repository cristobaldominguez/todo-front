import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

import { api_url } from '../config'
import useAuth from '../hooks/useAuth'
import DarkModeToggle from './DarkModeToggle'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function UserDropdownMenu({ logout }) {
  const { user } = useAuth()
  const user_photo = (user && user.photo) ? user.photo : { filename: 'default', extension: 'jpg' }
  const profile_image_url = `${api_url}/profile/${user_photo.filename}@2x.${user_photo.extension}`

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="border-0 bg-transparent text-md dark:text-gray-600 dark:hover:text-gray-400">
          <div className="rounded overflow-hidden w-12 h-12">
            <img src={profile_image_url} alt="" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className='text-gray-700 dark:text-gray-100 block px-4 py-2 text-sm border-b dark:border-gray-700'>
              Hi {user.first_name}!
            </div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <div className='px-4 pt-2 '>
              <DarkModeToggle>
                <span className="ml-3 text-sm text-gray-900 dark:text-gray-300">Dark Mode</span>
              </DarkModeToggle>
            </div>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  onClick={logout}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm border-t dark:border-gray-700'
                  )}
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserDropdownMenu