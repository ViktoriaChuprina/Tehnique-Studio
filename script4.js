let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['7999', '6999', '22999', '22999', '12999','5999', '15999', '6999', '9999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}