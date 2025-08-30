let $ = document

let title_C = $.querySelector('.C')
let title_F = $.querySelector('.F')

let result = $.querySelector('.result')

let convertbutton = $.querySelector('.convertbutton')
let resetbutton = $.querySelector('.resetbutton')
let changebutton = $.querySelector('.changebutton')

let converter = $.querySelector('#converter')


function convert(){
    if(converter.value === '')
    {
        result.innerHTML = 'insert vorrect value'
        result.style.color = 'red'
    }else{
        if (title_C.innerHTML === '°C') // °C to °F
        {
            let resultvalue = (converter.value * 9/5) +32
            result.style.color = 'rgb(255, 255, 102)'
            result.innerHTML = converter.value + '°C to ' + resultvalue +'°F'

        }else{
            let resultvalue = (converter.value - 32) * 5/9
            result.innerHTML = converter.value + '°F to ' + resultvalue.toFixed(2) +'°C'
            result.style.color = 'rgb(255, 255, 102)' 
        }
    }
}

function reset(){
    converter.value = ''
    result.innerHTML = ''
}

function swap(){
    if(title_C.innerHTML === "°C"){
        title_C.innerHTML = '°F'
        title_F.innerHTML = '°C'
        converter.setAttribute('placeholder', '°F')
        $.title = 'mini project | °F to °C'
    }else{
        title_C.innerHTML = '°C'
        title_F.innerHTML = '°F'
        converter.setAttribute('placeholder', '°C')
        $.title = 'mini project | °C to °F'
    }
}

convertbutton.addEventListener('click', convert)
resetbutton.addEventListener('click', reset)
changebutton.addEventListener('click' , swap)
