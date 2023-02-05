import { useEffect, useState } from 'react'
import CustomDropzone from '../components/CustomDropzone'

import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'
import { api_url } from '../config'

function Profile() {
  const { user } = useAuth()
  const { put } = useFetch()
  const [first_name, setFirstName] = useState(user.first_name)
  const [last_name, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)

  const profile_image_url = `${api_url}/profile/${user.photo.filename}@2x.${user.photo.extension}`

  const sendBackChanges = async (changed_value) => {
    const key = Object.keys(changed_value)[0]
    if (user[key] === changed_value[key]) return

    await put({ url: `/users/${user.id}`, body: changed_value })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      sendBackChanges({ first_name })
    }, 2000)
    
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [first_name])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      sendBackChanges({ last_name })
    }, 2000)
    
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [last_name])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      sendBackChanges({ email })
    }, 2000)
    
    return () => {
      clearTimeout(timer)
    }
    // eslint-disable-next-line
  }, [email])

  return (
    <>
      <h2 className="mt-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500">Profile</h2>
      <div className="pt-5">
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="col-span-1"></div>
          <div className="mt-5 col-span-2">
            <div className="shadow-lg sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white dark:bg-gray-900 dark:text-gray-50 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-50">First name</label>
                    <input
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-50"
                    >
                      Last name
                    </label>
                    <input
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-50"
                    >
                      Email address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-1 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-50">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-19 w-19 overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
                        { !user.photo.filename ? <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg> : <img src={profile_image_url} className="inline-block h-19 w-19 overflow-hidden rounded" alt={`${user.first_name} ${user.last_name}`} />}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-11 sm:col-span-10">
                    <CustomDropzone />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
