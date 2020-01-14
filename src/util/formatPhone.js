const formatPhone = number => {
  if (typeof number !== 'string') {
    return ''
  }

  const digits = number.match(/\d/g)
  if (!digits) {
    return ''
  }

  if (digits.length !== 9) {
    return digits
  }

  let match = number.match(/([0-9]{3})([0-9]{3})([0-9]{3})/)
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`
  }
}

export default formatPhone
