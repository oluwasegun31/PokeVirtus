/// pokemon of the day
const landingName = document.querySelector('#landName');
const landingType = document.querySelector("#landType");
const landingImg = document.querySelector('#landImg');
const landHp = document.querySelector('#landHp');
const landAttack = document.querySelector('#landAttack');
const landDefense = document.querySelector('#landDefense');
const landSpeed = document.querySelector('#landSpeed');

async function pokemonOfTheDay(){
    // to generate random numbers
    let randomNum = Math.floor(Math.random() * (1010 - 1)) + 1;

    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        let data = await response.json();
        // pokemon of the day name
        landingName.textContent = await data.name;
        if(data.name.length >= 10 && window.innerWidth > 1050){
            landingName.style.fontSize = '4em'
        }
        //pokemon of the day type
        landingType.textContent = data.types[0].type.name;

        // image for pokemon of the day
        if(data.sprites.other["official-artwork"].front_shiny === null){
            landingImg.src = data.sprites.other["official-artwork"].front_default;
        }else{
            landingImg.src = data.sprites.other["official-artwork"].front_shiny;
        }
        
        // stats for pokemon of the day
        landHp.textContent = data.stats[0].base_stat;
        landAttack.textContent = data.stats[1].base_stat;
        landDefense.textContent = data.stats[2].base_stat;
        landSpeed.textContent = data.stats[5].base_stat;
    }catch (err){
        console.error(err.message)
    }
}
pokemonOfTheDay()

/////////////////////////////////////SEARCH POKEMON///////////////////////////////////////
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#inputSearch');
const searchName = document.querySelector('.searchName > h2');
const searchType = document.querySelector('.searchName > p');
const searchWeight = document.querySelector('.weight > h4');
const searchHeight = document.querySelector('.height > h4');
const searchBaseExp = document.querySelector('.baseExp > h4');
const searchHP = document.querySelector('.hp > h4');
const searchAtk = document.querySelector('.attack > h4');
const searchDef = document.querySelector('.defense > h4');
const searchSpecialAtk = document.querySelector('.specialAtk > h4');
const searchSpecialDef = document.querySelector('.specialDef > h4');
const searchSpeed = document.querySelector('.speed > h4');
const searchAbility = document.querySelector('.searchAbilities');
const searchImg = document.querySelector('#searchImg');
const errorContainer = document.querySelector('.error');
const errorMessage = document.querySelector('.error > p')

// to get the input value when the search btn is clicked and passing the value to the fetch
searchInput.value = 1;
searchBtn.addEventListener('click', ()=> {
    if(searchInput.classList.contains('active')){
        searchPokemon();
    }else{
        searchInput.classList.add('active');
        searchBtn.style.backgroundColor = 'inherit';
    }
})
searchPokemon();
// a function to fetch the search data
async function searchPokemon(){
    //to make the search input to lowercase
    let inputVal = searchInput.value.toLowerCase();
    try{
        let searchResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`);
        let searchData = await searchResponse.json();
        console.log(searchData)

        // pokemon name and type
        searchName.textContent = searchData.name;
        searchType.textContent = searchData.types[0].type.name;

        //pokemon stats
        searchWeight.textContent = searchData.weight;
        searchHeight.textContent = searchData.height;
        searchBaseExp.textContent = searchData.base_experience;
        searchHP.textContent = searchData.stats[0].base_stat;
        searchAtk.textContent = searchData.stats[1].base_stat;
        searchDef.textContent = searchData.stats[2].base_stat;
        searchSpecialAtk.textContent = searchData.stats[3].base_stat;
        searchSpecialDef.textContent = searchData.stats[4].base_stat;
        searchSpeed.textContent = searchData.stats[5].base_stat;

        //search abilities
        searchAbility.innerHTML = searchData.abilities.map(items=> {
            return (
                `<div class="searchAbilItem">
                <img src="./assets/icons8-triangle-50.png" alt="item">
                <p>${items.ability.name}</p>
                </div>`
            );
        }).join('');

        // search images
        if(searchData.sprites.other["official-artwork"].front_shiny === null){
            searchImg.src = searchData.sprites.other["official-artwork"].front_default;
        }else{
            searchImg.src = searchData.sprites.other["official-artwork"].front_shiny;
        }
    }catch(err){
        // to display the error container and
        errorContainer.style.display = 'flex';
        if(err.message === 'Unexpected token N in JSON at position 0'){
            errorMessage.textContent = `Incorrect id or name`;
        }else{
            errorMessage.textContent =`unable to fetch`
        }
        setTimeout(()=> {
            errorContainer.style.display = 'none';
        }, 3000);
    };
}

