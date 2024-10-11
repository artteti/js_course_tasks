const btnUp = document.querySelector('.sizeUp')
const btnDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const increase = () => {
    fontSize +=5
    p.style.fontSize = fontSize + 'px'
}

const decrease = () => {
    
    if (fontSize <= 21) {
        return
    }
    fontSize -=5
    p.style.fontSize = fontSize + 'px'
}

const changeColor = (params) => {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    
    p.style.color = `rgb(${r},${g},${b})`
}


btnUp.addEventListener('click', increase)
btnDown.addEventListener('click', decrease)
btnColor.addEventListener('click', changeColor)