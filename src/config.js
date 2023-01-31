const api_url = 'http://localhost:3000'
const user_local_storage_key = 'user'
const dark_mode_local_storage_key = 'dark_mode'

const notification_types = {
  info: {
    icon: 'super-mario',
    colors: {
      light: {
        bg: 'bg-indigo-600',
        text: 'text-indigo-600',
        hex: '#4F46E5'
      },
      dark: {
        bg: 'dark:bg-indigo-400',
        text: 'dark:text-white',
        hex: '#818CF8'
      }
    }
  }
}

export {
  api_url,
  notification_types,
  user_local_storage_key,
  dark_mode_local_storage_key
}
