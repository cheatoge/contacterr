const formatPhone = number => {
  if (!number instanceof String) {
    return ''
  }

  let match = number.match(/([0-9]{3})([0-9]{3})([0-9]{3})/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
}

export default formatPhone
