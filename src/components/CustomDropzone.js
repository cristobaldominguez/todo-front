import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone'

import useFetch from '../hooks/useFetch.js'
import useAuth from '../hooks/useAuth.js'

function CustomDropzone() {
  const { user } = useAuth()
  const { patch } = useFetch()

  const onDrop = useCallback(async acceptedFiles => {
    const file = acceptedFiles[0]
    const form_data = new FormData()
    form_data.append('photo', file)

    await patch({ url: `/users/${user.id}`, content_type: false, body: form_data })
  }, [user.id, patch])

  const { getRootProps, getInputProps } = useDropzone({onDrop})

  return (
    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6" {...getRootProps()}>
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white dark:bg-transparent font-medium text-indigo-600 dark:text-indigo-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span>Upload a file</span>
            <input
              {...getInputProps()}
              id="file-upload"
              name="file"
              type="file"
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  )
}

export default CustomDropzone
