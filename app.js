let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let value = document.querySelector('.value');


let count = 0;
increase.addEventListener('click',function(){
    count++
    value.innerText = count
    if(count > 0){
        value.style.color = 'green'
    }

})
decrease.addEventListener('click',function(){
    count--
    value.innerText = count
    if(count < 0){
        value.style.color = '#961e1e'
    }

})
reset.addEventListener('click',function(){
    count = 0
    value.innerText = count
        value.style.color = 'black'

})