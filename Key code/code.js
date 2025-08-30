let $ = document
let title = $.querySelector('#title')

let starter = $.querySelector('#starter')
let heading = $.querySelector('.heading')
let ascii = $.querySelector('.ascii')
let infos = $.querySelector('.infos')

let locationkey = $.querySelector('#location')
let inputkey = $.querySelector('#key')
let inputwhich = $.querySelector('#which')
let inputcode = $.querySelector('#code')

document.body.addEventListener('keydown', function(event){
    starter.style.display = 'none'
    heading.style.display = 'flex'
    ascii.style.display = 'flex'
    infos.style.display = 'flex'

    let eventkeycode = event.keyCode
    let eventkey = event.key
    let eventlocation = event.location
    let eventwhich = event.which
    let eventcode = event.code

    ascii.innerHTML = eventkeycode
    locationkey.innerHTML = eventlocation
    inputkey.innerHTML = eventkey
    inputwhich.innerHTML = eventwhich
    inputcode.innerHTML = eventcode


    // 
    event.preventDefault()    
})

