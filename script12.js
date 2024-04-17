let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['6999', '4999','4499','5999', '4999','5999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
