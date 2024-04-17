let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['7499', '13999','59999','24799', '6999','7999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}