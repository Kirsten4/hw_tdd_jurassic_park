const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 45)
    dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 54)
    
    park = new Park('Jurassic Park', 27, [dinosaur1,dinosaur2,dinosaur3])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 27);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1,dinosaur2,dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    dinosaur4 = new Dinosaur('oviraptor', 'omnivore', 38)
    park.addDino(dinosaur4);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3,dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDino(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2,dinosaur3]);
  }); 

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.attractsMostVisitors();
    assert.strictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosOfSpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur1,dinosaur2]);
  });
  

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.calculateDailyVisitors();
    assert.strictEqual(actual, 149)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.calculateYearlyVisitors();
    assert.strictEqual(actual, 54385)
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.calculateRevenuePerYear();
    assert.strictEqual(actual, 1468395)
  });

});
