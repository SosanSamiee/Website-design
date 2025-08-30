let $ = document

const inputElem = $.querySelector('.input-not')
const btnsaveElem = $.querySelector('.add')
const btndeleteElem = $.querySelector('.delete')
const colorsBox = $.querySelectorAll('.color')
const notescontaner = $.querySelector('#listed')


colorsBox.forEach(function (colorbox) {
    colorbox.addEventListener('click', function (event) {
        let maincolor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = maincolor
    })
})

btndeleteElem.addEventListener('click', function () {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
})

function generateNewNote() {
    if(inputElem.value != ''){
        let newnote = document.createElement('p'); 
        newnote.className = 'card-text text-center mx-1 mb-2';
        newnote.innerHTML = inputElem.value;
    
        newnote.addEventListener('click', removeNote)

        let inputcolor = inputElem.style.backgroundColor
        newnote.style.backgroundColor = inputcolor
    
        notescontaner.append(newnote);
        inputElem.value = ''
        inputElem.style.backgroundColor = '#fff'
    }
}

function removeNote(event){
    event.target.remove()
}

inputElem.addEventListener('keydown', function () {
    if (event.keyCode === 13) {
        generateNewNote()
    }
})

btnsaveElem.addEventListener('click', generateNewNote)