let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['1499', '2999','5799','1599', '2799','6999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
