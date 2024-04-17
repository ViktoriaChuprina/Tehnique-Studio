let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['4999', '4999','3799','4599', '3799','4399', '3799', '4499', '4399']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
