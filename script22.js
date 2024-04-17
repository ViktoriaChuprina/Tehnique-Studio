let cart_items_count=document.querySelector('.cart-amount')
let buttons_iphone_1=document.querySelectorAll('.btn-ip-1')
for(let i = 0; i < buttons_iphone_1.length; i += 1){
    buttons_iphone_1[i].addEventListener('click', function(){
        cart_items_count.innerHTML =+ cart_items_count.innerHTML +1
    })
}

function calc_price(){
    let total_price = +buttons_iphone_1 + name_prices_iphone.value 
    alert(total_price)
}
setTimeout(calc_price, 10000)
let cart_text= document.querySelector('.cart-text')
cart_text.addEventListener('click', calc_price)

alert(document.cookie)
