const menu = document.querySelector("#menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn =  document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")
// const addToCartBtn = document.querySelectorAll(".add-to-cart-btn")

let cart = []

cartBtn.addEventListener("click", function teste (){
cartModal.style.display = "flex"
updateCartModal()
})

cartModal.addEventListener("click", function (event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", ()=>{
    cartModal.style.display = "none"
})

// addToCartBtn.forEach((element)=>{
//     element.addEventListener("click", ()=>{
//         console.log(`
//         name: ${element.dataset.name}
//         price: ${element.dataset.price}
//         `)
//     })
// })

menu.addEventListener("click", (event)=>{


    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name,price)
    }
    

})

function addToCart(name,price){

    const existingItem = cart.find(item => item.name === name)
    if(!existingItem){
        cart.push({
            name,
            price,
            quantity: 1
        })
    } else{
        existingItem.quantity = existingItem.quantity + 1
    }
    updateCartModal()
}

function updateCartModal(){
    cartItemsContainer.innerHTML = ""
    let total = 0
    cart.forEach(item=>{
        const cartItemElement = document.createElement("div")
        cartItemElement.classList.add("flex", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
        <div class="flex items-center justify-between">
        <div>
        <p class="font-medium">Nome: ${item.name}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p class="font-medium mt-2">Preço unitário: R$ ${item.price.toFixed(2)}</p>
        </div>

        <button class="remove-from-cart-btn" data-name="${item.name}">Remover</button>
       
        </div>
        `
        total += item.price * item.quantity
        
        cartItemsContainer.appendChild(cartItemElement)



    })
    cartTotal.innerText = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    cartCounter.innerText = cart.length
}

cartItemsContainer.addEventListener("click" , function (event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name= event.target.getAttribute("data-name")
        removeItemCart(name)
    }
})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name)
    if(index !== -1){
        const item = cart[index]

        if(item.quantity > 1){
            item.quantity -= 1
            updateCartModal()
            return
        }
        cart.splice(index, 1)
        updateCartModal()
    }
}

addressInput.addEventListener("input", function (event) {
    let inputValue = event.target.value
})