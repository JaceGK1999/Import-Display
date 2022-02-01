import { energyFacts } from './energyBars.js';
import { sodas } from './sodas.js';
import { animals } from './animals.js';

export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');

    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();

    const img = document.createElement('img');
    img.src = `./assets/${animal.image}`;

    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs and a cuteness rating of ${animal.cuteness}.`;

    div.append(h2, img, p);
    return div;
}

export function renderSoda(soda) {
    const div = document.createElement('div');
    div.classList.add('soda');

    const p = document.createElement('p');
    p.textContent = soda;

    div.append(p);
    return div;
}

export function renderEnergyFacts(energyFacts) {
    const div = document.createElement('div');
    div.classList.add('facts');

    const h2 = document.createElement('h2');
    h2.textContent = energyFacts.name.toUpperCase();
    console.log(energyFacts.name, 'energy name');
    //     const h3 = document.createElement('h3');
    //     h3.textContent = energyFacts.nutrition.toUpperCase();

    //     const li = document.createElement('li');
    //     li.textContent = energyFacts.nutrition.calories;
    div.append(h2);
    return div;
}
