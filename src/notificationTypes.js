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
  },
  error: {
    icon: 'medium-risk',
    colors: {
      light: {
        bg: 'bg-rose-600',
        text: 'text-rose-600',
        hex: '#4F46E5'
      },
      dark: {
        bg: 'dark:bg-rose-400',
        text: 'dark:text-white',
        hex: '#818CF8'
      }
    }
  }
}

export { notification_types }
