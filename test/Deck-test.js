const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {
  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 







  // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  // const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
  // const deck = new Deck([card1, card2, card3]);
  
  // deck.countCards(); // => 3

  // Your Deck class should be initialized with an array of Card objects and should have an accompanying test file.
  // It should know how many Cards are in the Deck.
});