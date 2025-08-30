let dataobject = {
    Iran: ['thran', 'tabrize' , 'hamidan' , 'mashhad'],
    turkey: ['Istanbul' , 'Ezmir', 'Ankara' , 'Antaliya'],
    US: ['los angles' , 'san diego']
}

let selectbox = document.querySelector('.form-select') 
let cityselect = document.querySelector('.selectcity')

selectbox.addEventListener('change' , function(){

    let maincountryname = selectbox.value
    listcity = dataobject[maincountryname]
    if(maincountryname === 'Please Select')
    {
        cityselect.innerHTML = ''
        cityselect.innerHTML += '<option>' + "select city" + '</otion>'
    }else{
        cityselect.innerHTML = ''
        listcity.forEach(function(city) {
            cityselect.innerHTML += '<option>' + city + '</otion>'
        });
    }
    
})