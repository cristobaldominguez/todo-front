import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BoardDropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="border-0 bg-transparent text-md dark:text-gray-600 dark:hover:text-gray-400">
          <i className="icon-menu-vertical text-slate-500"></i>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 dark:text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default BoardDropdownMenu
