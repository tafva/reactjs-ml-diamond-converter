
const IDRCurrency = (number) => {

  let price = String(number).split("").reverse()

    for (let i = 0; i < price.length; i++) {
      if((i + 1) % 3 === 0 && i !== price.length - 1) {
        price[i] = `.${price[i]}`
      }
    }

    price = number === 0 ? 0 : price.reverse().join("");

    return `Rp. ${price},00`;
}

export default IDRCurrency;