let name_prices_iphone_objects=document.querySelectorAll('.name-price-ip')
let name_prices_iphone=['21999', '57999', '4399', '22799', '6799', '25899', '23999', '16499', '22100']
for(let i = 0; i < name_prices_iphone.length; i += 1){
    name_prices_iphone_objects[i].innerHTML = name_prices_iphone[i]
}