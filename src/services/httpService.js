import { api_url } from '../config'

async function Http({ method = 'GET', url = '/boards', token = null, body = null, content_type = true }) {
  if (!url.startsWith('/')) throw new Error('URL must start with /')

  const full_url = new URL(api_url + url)
  const config = {
    method,
    headers: {
      'Accept': 'application/json'
    }
  }

  if (content_type) {
    config.headers['Content-Type'] = 'application/json'
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (body && content_type) {
    config.body = JSON.stringify(body)
  }

  if (body && !content_type) {
    config.body = body
  }
  
  try {
    const response = await fetch(full_url.href, config)
    const data = await response.json()
    if (!response.ok) throw data.error

    return { data, loading: false, error: null }

  } catch (error) {
    return { data: null, loading: false, error }
  }
}

export default Http
