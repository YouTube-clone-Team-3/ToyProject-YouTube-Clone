const calcNum = (num) => {
  if (num >= 0 && num < 1000) {
    return num
  } else if (num >= 1000 && num < 1000000) {
    const calcK = num.split('').reverse().slice(2).reverse()
    calcK.splice(calcK.length - 1, 0, '.')
    return `${calcK.join('')}K`
  } else if (num >= 1000000) {
    const calcM = num.split('').reverse().slice(5).reverse()
    calcM.splice(calcM.length - 1, 0, '.')
    return `${calcM.join('')}M`
  }
}

export default calcNum