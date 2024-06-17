const h1 = document.querySelector('h1')
console.dir(h1);


const picture = document.querySelector('img')
console.dir(picture);


function DOMContentLoaded() {
    // console.log('DOMContentLoaded');
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded)

function load() {
    // console.log('load');
}

window.addEventListener('load', load)

function beforeunload() {
    // console.log('beforeunload');
    return false
}

window.addEventListener('beforeunload', beforeunload)

// window.onbeforeunload = function() {
//     return false
// }


function unload() {
    navigator.sendBeacon('some url', JSON.stringify({ name: 'Vlad' }))
}

window.addEventListener('unload', unload)


document.addEventListener('readystatechange', () => {
    // complete" | "interactive" | "loading
    console.log(document.readyState);


})


const myImg = document.createElement('img')
myImg.src = 'https://en.js.cx/clipart/train.gif?speed=1&cache=0'

myImg.onload = function() {
    console.log('Изображение успешно загружено');
}

myImg.onerror = function() {
    console.log('Изображение не загружено');
    console.log('Вставляем запасное');
    const myImg = document.createElement('img')
    myImg.src = './picture.png'
    document.body.append(myImg)

}

document.body.append(myImg)