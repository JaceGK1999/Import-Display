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

    const h3 = document.createElement('h3');
    h3.textContent = 'NUTRIENTS';

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    li1.textContent = energyFacts.nutrition.calories;
    li2.textContent = energyFacts.nutrition.servingSize;
    div.append(h2, h3, ul);
    ul.append(li1, li2);
    return div;
}

export function renderFamily(people) {
    const div = document.createElement('div');
    div.classList.add('people');
    const h2 = document.createElement('h2');
    h2.textContent = people.name;
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.textContent = 'Children';

    for (people of people.children) {
        const li1 = document.createElement('li');

        li1.textContent = people;
        ul.append(li1);
    }
    div.append(h2, h3, ul);
    return div;
}
