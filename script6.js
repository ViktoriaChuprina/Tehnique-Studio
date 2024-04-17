let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['19999', '22999','11999','20999', '24999','18999', '11999', '13999', '19999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
