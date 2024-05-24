// Using promises to make an API call

fetch("https://pokeapi.co/api/v2/pokemon/grumpig/")
 .then((res) => res.json())
 .then((result) => {
    let abilityEl = result.abilities;
   // let ability_string = JSON.stringify(abilityEl)
   console.log(abilityEl)
    
    let weightEl = result.weight;
    let nameEl = result.name;
    console.log(nameEl)
    console.log(weightEl)
 })

