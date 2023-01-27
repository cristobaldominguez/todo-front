import { api_url } from '../config'

async function Http({ method = 'GET', url = '/boards', token = null, body = null }) {
  if (!url.startsWith('/')) throw new Error('URL must start with /')

  const full_url = new URL(api_url + url)
  const config = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(full_url.href, config)
    if (response.error) throw new Error(response.error.message)

    const data = await response.json()
    return { data, loading: false }

  } catch (error) {
    return { data: null, loading: false, error }
  }
}

export default Http