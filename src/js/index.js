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
})

cartModal.addEventListener("click", function (){
    console.log(event.target)
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
        console.log({name,price})
    }
    console.log(parentButton)

})

function addToCart(name,price){

    const existingItem = cart.find(item => item.name === name)


    cart.push({
        name,
        price,
        quantity
    })
}