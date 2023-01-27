import Http from '../services/httpService'
import useAuth from './useAuth'

function useFetch() {
  const { token } = useAuth()

  return {
    get: ({ url }) => Http({ method: 'GET', url, token }),
    post: ({ url, body }) => Http({ method: 'POST', token, url, body }),
    put: ({ url, body }) => Http({ method: 'PUT', token, url, body }),
    patch: ({ url, body }) => Http({ method: 'PATCH', token, url, body }),
    delete: ({ url }) => Http({ method: 'DELETE', token, url })
  }
}

export default useFetch
