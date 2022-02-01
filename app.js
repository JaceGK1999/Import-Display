import { animals } from './animals.js';
import { sodas } from './sodas.js';
//import { sodaFacts } from './sodaFacts.js';
import { renderAnimal, renderSoda } from './utils.js';
const animalList = document.getElementById('animal-list');
const sodaList = document.getElementById('soda-list');

for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}

for (let soda of sodas) {
    const div = renderSoda(soda);
    sodaList.append(div);
}

// for (let sodaFact of sodaFacts) {

// }
// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
