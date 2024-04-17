
function first_selling(message){
    let selling = prompt('Скільки моделей телефону вам подобається?', 0);
}
let selling=prompt('Скільки моделей телефону вам подобається?', 0)
if(selling > 0){
    alert('Це дуже добре)');
}else{
    alert('Ще раз подумайте)');
}

function second_selling(message){
    alert('Зараз буде ще одне питання до тебе')
    alert('Приготуйся)')
}
function third_selling(message){
    let selling3 = prompt('Перший девіз', 'Слава Україні')
    let selling4 = prompt('Другий девіз', )
    if(selling4 == 'Героям слава!'){
        alert('Ти молодець!');
    }else{
        alert('Я тобі пропоную не підтримувати російську пропаганду');
    }
    let selling5 = prompt('А тепер сам подумай)' )
    if(selling5 == 'Смерть ворогам!'){
        alert('А це правильне рішення мій друже)')
    }else{
        alert('Дуже погано(')
    }
}
let promise = new Promise(function(resolwe, reject){
    setTimeout(function(){
        second_selling();
        resolwe();
    }, 10000)
    });
promise.then(function(){
    setTimeout(third_selling, 1000)
});

    

