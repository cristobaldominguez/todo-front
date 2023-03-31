function DarkModePrinter(dark_mode) {
  const html = document.documentElement.classList

  if (dark_mode) {
    html.add('dark')
  } else {
    html.remove('dark')
  }
}

export default DarkModePrinter
