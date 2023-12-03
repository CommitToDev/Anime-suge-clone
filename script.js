const api = `https://api-anime-psi.vercel.app/` ;
const animeSearchBox = document.querySelector('input');
const searchList = document.getElementById('search-list');



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

async function loadAnime (x){
    let url = `https://api-anime-psi.vercel.app/anime/gogoanime/${x}?page=1`;
    const res = await fetch(`${url}`);
    let data = await res.json();
   
    if(data.Response = "True")  dispalyAnimeList(data.results)
}

function findAnime(){
    let searchTerm = (animeSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadAnime(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}
function dispalyAnimeList(anime){
    searchList.innerHTML = "";
    for(let idx = 0; idx <  anime.length; idx++){
        let animeListItem = document.createElement('div');
        animeListItem.classList.add('search-list-item');
        if(anime[idx].image != "N/A")
            animePoster = anime[idx].image;
        else
           animePoster = "image_not_found.png";
       animeListItem.innerHTML = `
        <div class = "search-item-thumbnail">
        <img src = "${animePoster}">
    </div>
    <div class = "search-item-info">
            <h3>${anime[idx].title}</h3>
            <p>${anime[idx].releaseDate}</p>
        </div>
        `;
        searchList.appendChild(animeListItem);
    }
}