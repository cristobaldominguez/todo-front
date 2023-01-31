function DarkModePrinter(dark_mode) {
  const html_tag = document.querySelector('html')
  const html = html_tag.classList

  if (dark_mode) {
    html.add('dark')
  } else {
    html.remove('dark')
  }
}

export default DarkModePrinter
