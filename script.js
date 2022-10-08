var ord = document.querySelector('#mid #ord');
var order = document.querySelector('#order');
var span = document.querySelector('#order span');

var flag = 0;

ord.addEventListener('click', function(){
    if(flag === 0){
        order.style.transform = 'translateY(200%)';
        span.addEventListener('click', function(){
            order.style.transform = 'translateY(-200%)';
            ord.style.textDecoration = 'none'
        })
        flag = 1;
    }
    else{
        order.style.transform = 'translateY(200%)';
        span.addEventListener('click', function(){
            order.style.transform = 'translateY(-200%)';
            ord.style.textDecoration = 'none'
        })
        flag = 0;
    }
})
// span.addEventListener('click', function(){
//     order.style.display = 'none'
//     ord.style.textDecoration = 'none'
// })

var cake1 = document.querySelector('#cake #cake1');
var cake2 = document.querySelector('#cake #cake2');
var cake3= document.querySelector('#cake #cake3');
var cake4 = document.querySelector('#cake #cake4');
var cake5 = document.querySelector('#cake #cake5');
var cake6 = document.querySelector('#cake #cake6');
var cake7 = document.querySelector('#cake #cake7');
var clicker1 = document.querySelector('#clickers #clicker1');
var clicker2 = document.querySelector('#clickers #clicker2');
var clicker3 = document.querySelector('#clickers #clicker3');
var clicker4 = document.querySelector('#clickers #clicker4');
var clicker5 = document.querySelector('#clickers #clicker5');

clicker4.addEventListener('click', function(){
    cake1.style.transform = 'translateX(-100%)';
    cake2.style.transform = 'translateX(-100%)';
    cake3.style.transform = 'translateX(-100%)';
    cake4.style.transform = 'translateX(-100%)';
    cake5.style.transform = 'translateX(-100%)';
    cake6.style.transform = 'translateX(-100%)';
    cake7.style.transform = 'translateX(-100%)';
    clicker4.style.display = 'none'
    clicker5.style.display = 'none'
})
clicker3.addEventListener('click', function(){
    cake1.style.transform = 'translateX(-200%)';
    cake2.style.transform = 'translateX(-200%)';
    cake3.style.transform = 'translateX(-200%)';
    cake4.style.transform = 'translateX(-200%)';
    cake5.style.transform = 'translateX(-200%)';
    cake6.style.transform = 'translateX(-200%)';
    cake7.style.transform = 'translateX(-200%)';
    clicker3.style.display = 'none'
})
clicker2.addEventListener('click', function(){
    cake1.style.transform = 'translateX(-300%)';
    cake2.style.transform = 'translateX(-300%)';
    cake3.style.transform = 'translateX(-300%)';
    cake4.style.transform = 'translateX(-300%)';
    cake5.style.transform = 'translateX(-300%)';
    cake6.style.transform = 'translateX(-300%)';
    cake7.style.transform = 'translateX(-300%)';
})

clicker1.addEventListener('click', function(){
    cake1.style.transform = 'translateX(0%)';
    cake2.style.transform = 'translateX(0%)';
    cake3.style.transform = 'translateX(0%)';
    cake4.style.transform = 'translateX(0%)';
    cake5.style.transform = 'translateX(0%)';
    cake6.style.transform = 'translateX(0%)';
    cake7.style.transform = 'translateX(0%)';
    clicker5.style.display = 'none'
    clicker2.style.display = 'none'
    clicker4.style.display = 'initial'
    clicker3.style.display = 'initial'
    clicker2.style.display = 'initial'
    clicker5.style.display = 'initial'
    clicker1.style.display = 'initial'
})

var overlay1 = document.querySelector('#overlay1');
var h2 = document.querySelector('#offer h2');

h2.addEventListener('click', function(){
    overlay1.style.transform = 'translateY(100%)';

})

var i2 = document.querySelector('#overlay1 i');


i2.addEventListener('click', function(){
    overlay1.style.transform = 'translateX(100%)';
})

var offer = document.querySelector('#offer button');
var overlay2 = document.querySelector('#overlay2');

offer.addEventListener('click', function(){
    overlay2.style.transform = 'translateY(100%)';
})

var overbut = document.querySelector('#overlay2 button');
var i3 = document.querySelector('#overlay2 i');
var over2 = document.querySelector('#overlay2');
var but3 = document.querySelector('#overlay3 button');
i3.addEventListener('click', function(){
    overlay2.style.transform = 'translateX(100%)';
})

overbut.addEventListener('click', function(){
    overlay3.style.transform = 'translateY(100%)';
})

but3.addEventListener('click', function(){
    overlay3.style.display = 'none';
    over2.style.display = 'none';
})
