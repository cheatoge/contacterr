const generateID = () => {
  var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
  return randomLetter + Date.now()
}

export default generateID
