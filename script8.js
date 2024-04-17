let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['3499', '999','699','3999', '11999','1999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
