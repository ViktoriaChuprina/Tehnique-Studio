let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['26999', '48999','50999','177999', '124999','83999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
