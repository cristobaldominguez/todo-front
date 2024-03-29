import Http from '../services/httpService'
import useAuth from './useAuth'
import useNotification from '../hooks/useNotification'

function useFetch() {
  const { token, setUser } = useAuth()
  const { setNotifications } = useNotification()

  const handleResponse = ({ data, loading, error }) => {
    if (error && !error.field) setNotifications([{ title: error.name, content: error.message, type: 'error' }])

    if (data?.user && data?.accessToken) {
      setUser({...data})
    }

    return { error, data, loading }
  }

  return {
    get: ({ url }) => Http({ method: 'GET', url, token }),
    post: ({ url, body, content_type }) => Http({ method: 'POST', token, url, body, content_type }).then(handleResponse),
    put: ({ url, body, content_type }) => Http({ method: 'PUT', token, url, body, content_type }).then(handleResponse),
    patch: ({ url, body, content_type }) => Http({ method: 'PATCH', token, url, body, content_type }).then(handleResponse),
    delete: ({ url }) => Http({ method: 'DELETE', token, url })
  }
}

export default useFetch
