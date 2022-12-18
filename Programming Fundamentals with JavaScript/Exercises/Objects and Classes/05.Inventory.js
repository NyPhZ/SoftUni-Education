function test(arr) {
 
    let characters = [];
     
    for(let charactersStats of arr) {
        let [name,level,items] = charactersStats.split(' / ');
        let splitItems = items.split(', ');
     
        let currentHero = {
            name: name,
            level:+level,
            items:items
        };
        characters.push(currentHero);
    }
     
    let sortedByLevel = characters.sort((a,b) => {
        return a.level - b.level;
    })
     
    for(let hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
     
    }