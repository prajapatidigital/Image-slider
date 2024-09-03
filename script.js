var nextbtn = document.querySelector('.next'),
prevbtn = document.querySelector('.prev'),
carousel = document.querySelector('.carousel'),
list = document.querySelector('.list'),
item = document.querySelectorAll('.item'),
runningTime =  document.querySelector('.timeRunning')


let timeRunning = 3000
let timeAutoNext =7000

nextbtn.onclick = function(){
    showslider('next')
}

prevbtn.onclick = function(){
    showslider('prev')
}

let runTimeOut
let runNextAuto =setTimeout(()=>{
    nextbtn.click()
},timeAutoNext)

function resetTimeAnimation(){
    runningTime.style.animation ="none"
    runningTime.offsetHeight
    runningTime.style.animation =null
    runningTime.style.animation =' runningTime 7s linear 1 forwards'
}


function showslider(type){
    let sliderItemDom = list.querySelectorAll('.carousel .list .item')
if(type === 'next'){
    list.appendChild(sliderItemDom[0])
    carousel.classList.add('next')
}
else{
    list.prepend(sliderItemDom[sliderItemDom.length-1])
    carousel.classList.add('prev')
}
clearTimeout(runTimeOut)

runTimeOut = (()=>{
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
},timeRunning)

clearTimeout(runNextAuto)
    runNextAuto =setTimeout (()=>{
        nextbtn.click()
    },timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()

