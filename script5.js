let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['26999', '25899','8999','16999', '26999','47999', '64999', '17999', '12999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
