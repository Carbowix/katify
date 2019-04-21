# katify

[![Build Status](https://travis-ci.org/Carbowix/katify.png?branch=master)](https://travis-ci.org/Carbowix/katify)
[![npm version](https://badge.fury.io/js/katify.svg)](https://badge.fury.io/js/katify)
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/carbowix/katify?targetFile=package.json)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/86c1dec77a6c4b5eadfbda143404d915)](https://www.codacy.com/app/Carbowix/katify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Carbowix/katify&amp;utm_campaign=Badge_Grade)

[![https://nodei.co/npm/katify.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/katify.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/katify)

NPM package made for cat lovers. 
Provides you with a variety of stuff for cats in one place.

-   **Random Cat img**
-   **Random Cat face ascii**
-   **Random Cat Fact**
-   **Random Cat Breed**
-   **Cat breeds**
-   **Cat name suggest**

## TODO
-   **Cat image searcher**
-   **Cat articles retriever**
-   **Improved Cat breed**
-   **Improved Cat facts**

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
