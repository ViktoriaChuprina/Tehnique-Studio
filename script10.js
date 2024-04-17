let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['1799', '1999','6999','879', '14999','2799']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
