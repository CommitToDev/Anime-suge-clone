const elementJp = document.getElementById('lang-JP');
const elementEn = document.getElementById('lang-EN');
elementJp.addEventListener('click', function(){
    elementJp.style.backgroundColor = 'red';
    elementEn.style.backgroundColor = '#252525'
})
elementEn.addEventListener('click', function(){
    elementEn.style.backgroundColor = 'red';
    elementJp.style.backgroundColor = '#252525'
})

