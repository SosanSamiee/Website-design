let navbar = document.querySelector('#mainnav')
let logoimg = document.querySelector('img')

document.addEventListener('scroll', function(){
    if( document.documentElement.scrollTop > 0){
        navbar.classList.add('bg-black')
        navbar.classList.add('text-white')
        logoimg.style.height = '30px'
    }else{
        navbar.classList.remove('bg-black')
        navbar.classList.remove('text-white')
        logoimg.style.height = '30px'
    }
})



