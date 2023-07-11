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
    let randomNum = Math.floor(Math.random() * (1010 - 1)) + 1
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        // to throw an error if response is false
        if(!response.ok){
            throw new Error(`${response.status}: Unable to Load`);
        }
        let data = await response.json();
        // pokemon of the day name
        landingName.textContent = await data.name;
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
        console.log(data)
    }catch (err){
        console.error(err.message)
    }
}
pokemonOfTheDay()