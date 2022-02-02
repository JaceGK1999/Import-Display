import { animals } from './animals.js';
import { sodas } from './sodas.js';
import { energyFacts } from './energyBars.js';
import { peoples } from './people.js';
import { renderAnimal, renderEnergyFacts, renderSoda, renderFamily } from './utils.js';
const animalList = document.getElementById('animal-list');
const sodaList = document.getElementById('soda-list');
const energyList = document.getElementById('energy-list');
const familyList = document.getElementById('family-list');

for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}

for (let soda of sodas) {
    const div = renderSoda(soda);
    sodaList.append(div);
}

for (let energyFact of energyFacts) {
    const div = renderEnergyFacts(energyFact);
    energyList.append(div);
}

for (let people of peoples) {
    const div = renderFamily(people);
    familyList.append(div);
}

// }
// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
