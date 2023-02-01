import Http from '../services/httpService'
import useAuth from './useAuth'

function useFetch() {
  const { token, setUser } = useAuth()

  const ifReturnsAToken = ({ data, loading }) => {
    if (data?.user && data?.accessToken) {
      setUser({...data})
    }

    return { data, loading }
  }

  return {
    get: ({ url }) => Http({ method: 'GET', url, token }),
    post: ({ url, body }) => Http({ method: 'POST', token, url, body }).then(ifReturnsAToken),
    put: ({ url, body }) => Http({ method: 'PUT', token, url, body }).then(ifReturnsAToken),
    patch: ({ url, body }) => Http({ method: 'PATCH', token, url, body }).then(ifReturnsAToken),
    delete: ({ url }) => Http({ method: 'DELETE', token, url })
  }
}

export default useFetch
