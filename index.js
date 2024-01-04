const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector(".sum-all")
const filterProducts = document.querySelector(".filter-all")

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})


return newValue
}
function showAll(productsArray){
    myLi = ''
    productsArray.forEach((product) => {
        myLi = myLi + `
           <li>
           <img src=${product.src}>
           <p>${product.name}</p>
           <p class="item-price">${formatCurrency(product.price)}</p>
         </li>
        
           `
})

list.innerHTML = myLi

}

function mapAllItens(){

    const newPrices = menuOptions.map((product)=> ({
        ...product,
        price: product.price * 0.9,
        
    }))

    showAll(newPrices)
}

function sumAllItens(){
    const totalValue = menuOptions.reduce((acc,curr ) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
    <p>O valor total dos itens é R$ ${totalValue},00</p>
  </li>`
}

function filter(){
    const filterAll = menuOptions.filter((product) => product.vegan)

    showAll(filterAll)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItens)
filterProducts.addEventListener('click', filter)
