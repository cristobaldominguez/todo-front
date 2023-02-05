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
    post: ({ url, body, content_type }) => Http({ method: 'POST', token, url, body, content_type }).then(ifReturnsAToken),
    put: ({ url, body, content_type }) => Http({ method: 'PUT', token, url, body, content_type }).then(ifReturnsAToken),
    patch: ({ url, body, content_type }) => Http({ method: 'PATCH', token, url, body, content_type }).then(ifReturnsAToken),
    delete: ({ url }) => Http({ method: 'DELETE', token, url })
  }
}

export default useFetch
