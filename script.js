/// pokemon of the day
const landingName = document.querySelector('#landName');
const landingType = document.querySelector("#landType");
const landingImg = document.querySelector('#landImg');
const landHp = document.querySelector('#landHp');
const landAttack = document.querySelector('#landAttack');
const landDefense = document.querySelector('#landDefense');
const landSpeed = document.querySelector('#landSpeed');

async function pokemonOfTheDay(){
    try{
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/800');
        if(!response.ok){
            throw new Error(`${response.status}: Unable to Load`);
        }
        let data = await response.json();
        landingName.textContent = data.name;
        landingType.textContent = data.types[0].type.name;
        landingImg.src = data.sprites.other["official-artwork"].front_shiny;
        landHp.textContent = data.stats[0].base_stat;
        landAttack.textContent = data.stats[1].base_stat;
        landDefense.textContent = data.stats[2].base_stat;
        landSpeed.textContent = data.stats[5].base_stat;
        console.log(data)
    }catch (err){
        console.error(err.message)
    }
}
pokemonOfTheDay()