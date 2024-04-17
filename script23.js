let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['16999', '27999','124999','40999', '249999','90999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}