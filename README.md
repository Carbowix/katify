# katify
NPM package made for cat lovers. 
Provides you with a variety of stuff for cats in one place.

- **Random Cat img**
- **Random Cat face ascii**
- **Random Cat Fact**
- **Random Cat Breed**
- **Cat breeds**
- **Cat name suggest**

## TODO
- **Cat image searcher**
- **Cat articles retriever**
- **Improved Cat breed**
- **Improved Cat facts**

## Installation

```bash
npm install katify --save
```

## API
Easy promisified API


```js
let katify = require('katify');

katify.randomCat().then(img => {
  console.log(img); // img link
});

console.log(katify.randomCatFace()); // ヽ(=^･ω･^=)丿

katify.randomCatFact().then(fact => {
  console.log(fact); // A female cat is called a queen or a molly.
});

katify.randomCatBreed().then(breed => {
   console.log(breed);
   /*
    {
      "breed": "Abyssinian",
      "country": "Ethiopia",
      "origin": "Natural/Standard",
      "coat": "Short",
      "pattern": "Ticked"
    }
   */
});


katify.getallCatBreeds().then(breeds => {
  console.log(breeds);
  /*
     {
      "breed": "Abyssinian",
      "country": "Ethiopia",
      "origin": "Natural/Standard",
      "coat": "Short",
      "pattern": "Ticked"
    },
    {
      "breed": "Aegean",
      "country": "Greece",
      "origin": "Natural/Standard",
      "coat": "Semi-long",
      "pattern": "Bi- or tri-colored"
    },
    {...}
  */
});

/*
* @param gender {String} (boy or girl)
* @param characteristics {Array} 
* Try it live: https://www.findcatnames.com/ 
*/
katify.suggestCatName(gender, ['funny', 'movie']).then(names => { 
  console.log(names); // [name1, name2]
});

katify.getCatNameCharacteristics(); // Characteristics Array
katify.getCatNameThemes(); // Other characteristics
```
