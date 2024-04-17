let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['21959', '26929', '67999', '51999', '31099', '26999', '36999',  '51999',  '57999']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}
