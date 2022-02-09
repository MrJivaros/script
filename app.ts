

const products = [
  {
    id: 1,
    name: 'tomate',
    quantity: 2,
  },
  {
    id: 4,
    name: 'piment',
    quantity: 4,
  },
  {
    id: 2,
    name: 'tomate',
    quantity: 1,
  },
  {
    id: 3,
    name: 'piment',
    quantity: 6,
  },
]
const productsNames = new Set(products.map((product) => product.name))
const response: IResponse[] = []
productsNames.forEach((name) => {
  const currentProductRow = products.filter(
    (products) => products.name === name
  )
  let quantity = 0
  currentProductRow.forEach((row) => {
    quantity += row.quantity
  })
  response.push({ name, quantity })
})

console.log(response)


interface IResponse {
  name: string
  quantity: number
}
