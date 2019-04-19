const request = require('https');
const cheerio = require('cheerio')
const catStuff = require('./catStuff.json');
const catFaces = require('./catFaces.json');
const randomImageUrl = 'https://api.thecatapi.com/api/images/get?format=xml'
const randomCatFactUrl = "https://catfact.ninja/";
const catNameUrl = "https://www.findcatnames.com/";
const randomSelection = choices => choices[Math.floor(Math.random() * choices.length)];

module.exports = {
    randomCat: () => {
        return new Promise((resolve, reject) => {
            request.get(randomImageUrl, (res) => {
                if (res.statusCode === 200) {
                    res.setEncoding("utf-8");
                    res.on("data", (d) => {
                        let img = /<url>(.+?)<\/url>/.exec(d);
                        resolve(img[1]);
                    });
                } else {
                    reject(new Error("No response from CAT IMG API, please try again later."));
                }
            });
        });
    },

    randomCatFace: () => { // Credits to https://github.com/melaniecebula/cat-ascii-faces
        return randomSelection(catFaces['faces']);
    },

    randomCatFact: () => {
        return new Promise((resolve, reject) => {
            request.get(randomCatFactUrl + "fact", (res) => {
                if (res.statusCode === 200) {
                    res.setEncoding("utf-8");
                    res.on("data", (d) => {
                        d = JSON.parse(d);
                        resolve(d.fact);
                    });
                } else {
                    reject(new Error("No response from CAT FACTS API, please try again later."));
                }
            });
        });
    },

    randomCatBreed: () => {
        return new Promise((resolve, reject) => {
            request.get(randomCatFactUrl + "breeds", (res) => {
                if (res.statusCode === 200) {
                    res.setEncoding("utf-8");
                    res.on("data", (d) => {
                        d = JSON.parse(d);
                        resolve(randomSelection(Array.from(d.data)));
                    });
                } else {
                    reject(new Error("No response from CAT BREEDS API, please try again later."));
                }
            });
        });
    },

    getallCatBreeds: () => {
        return new Promise((resolve, reject) => {
            request.get(randomCatFactUrl + "breeds", (res) => {
                if (res.statusCode === 200) {
                    res.setEncoding("utf-8");
                    res.on("data", (d) => {
                        d = JSON.parse(d);
                        resolve(Array.from(d.data));
                    });
                } else {
                    reject(new Error("No response from CAT BREEDS API, please try again later."));
                }
            });
        });
    },

    suggestCatName: (gender, characteristics) => {
        return new Promise((resolve, reject) => {
            let availableC = [];
            if (!catStuff["gender"].includes(gender.toLowerCase())) {
                reject(new TypeError(`Invalid gender, Available Genders: ${genders.map(g => g)}`));
            }

            if (!characteristics || characteristics.length < 1) {
                reject(new TypeError(`Charateristics are required to find a name, Available Characteristics: ${catStuff["characteristics"].map(c => c)}, and Available Themes: ${catStuff["themes"].map(t => t)}`))
            }

            characteristics.forEach(c => {
                if (!catStuff["characteristics"].includes(c)) {
                    if (!catStuff["themes"].includes(c)) {
                        console.warn(`Invalid Characteristic ${c} was entered.`);
                    } else {
                        availableC.push(c);
                    }
                } else {
                    availableC.push(c);
                }
            });
            if (availableC.length > 0) {
                request.get(catNameUrl + "names/?gender=" + gender + "&q=" + availableC.map(c => c).join('-'), res => {
                    if (res.statusCode === 200) {
                        res.setEncoding("utf-8");
                        res.on("data", (d) => {
                            let names = [];
                            const $ = cheerio.load(d);
                            $('label').each(function (i, e) {
                                names.push($(e).text());
                            });
                            resolve(names);
                        });
                    } else {
                        reject(new Error('No response for CAT NAME API, try again later.'))
                    }
                });
            } else {
                reject(new TypeError("All characteristics were invalid."));
            }
        });
    },

    getCatNameCharacteristics: () => {
        return catStuff["characteristics"];
    },

    getCatNameThemes: () => {
        return catStuff["themes"];
    }
};
