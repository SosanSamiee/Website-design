let $ = document
let inputElem = $.querySelector('input')
let addtodoform = $.querySelector('.input-box')
let todoulelem = $.querySelector('.todos')

addtodoform.addEventListener('submit', function (event) {
    event.preventDefault()
})

function addNewTodo(newtodovalue) {
    let newtodoLi = $.createElement('li')
    let newtodospan = $.createElement('span')
    let newtodotrash = $.createElement('i')
    newtodotrash.className = 'fa fa-trash delete'
    newtodotrash.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })

    newtodospan.innerHTML = newtodovalue

    newtodoLi.append(newtodospan, newtodotrash)

    // console.log(todoulelem)
    todoulelem.append(newtodoLi)
}

inputElem.addEventListener('keydown', function (event) {
    // console.log(event)
    let newtodovalue = event.target.value.trim()

    if (event.keyCode === 13) {
        if (newtodovalue) {
            inputElem.value = ''
            addNewTodo(newtodovalue)
        } else {
            alert("please write your to_do")
        }
    }

})

