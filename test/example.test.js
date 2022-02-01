// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderAnimal, renderSoda, renderEnergyFacts } from '../utils.js';

const test = QUnit.test;

test('renderDog should return a <div> with a dog', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h2>DOG</h2><img src="./assets/Cute-Dog.jpg"><p>mammals with 4 legs and a cuteness rating of 10.</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({
        type: 'dog',
        numberOfLegs: 4,
        class: 'mammals',
        cuteness: 10,
        image: 'Cute-Dog.jpg',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderSoda should make a paragraph of sodas', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="soda"><p>coke</p></div>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderSoda('coke');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should render a nested list', (expect) => {
    const expected =
        '<div class="facts"><h2>CLIFF</h2><h3>NUTRIENTS</h3><ul><li>150c</li><li>100mL</li></ul></div>';

    const actual = renderEnergyFacts({
        name: 'Cliff',
        nutrition: {
            calories: '150c',
            servingSize: '100mL',
        },
    });
    console.log(actual);
    expect.equal(actual.outerHTML, expected);
});
