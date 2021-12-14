const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs
}

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function (dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(index,1)
}

Park.prototype.attractsMostVisitors = function () {
    let mostPopularDino = this.dinosaurs[0]
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay) {
            mostPopularDino = dinosaur
        }
    }
    return mostPopularDino
}

Park.prototype.findDinosOfSpecies = function (species) {
    let dinosOfSpecies = []
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species){
            dinosOfSpecies.push(dinosaur)
        }
    }
    return dinosOfSpecies
}

Park.prototype.calculateDailyVisitors = function () {
    let dailyVisitors = 0;
    for (let dinosaur of this.dinosaurs) {
        dailyVisitors += dinosaur.guestsAttractedPerDay;
    }
    return dailyVisitors;
}

Park.prototype.calculateYearlyVisitors = function () {
    return this.calculateDailyVisitors() * 365
}

Park.prototype.calculateRevenuePerYear = function () {
    return this.calculateYearlyVisitors() * this.ticketPrice
}

Park.prototype.removeAllBySpecies = function (species) {
    let dinosToRemove = this.findDinosOfSpecies(species);
    for (let dinosaur of dinosToRemove){
        this.removeDino(dinosaur)
    }
}

Park.prototype.createDietObject = function () {
    const dietObject = {
        carnivore: 0,
        herbivore: 0,
        omnivore: 0    
    }; 
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.diet === 'carnivore'){
            dietObject.carnivore ++;
        } else if (dinosaur.diet === 'herbivore'){
            dietObject.herbivore ++;
        } else {
            dietObject.omnivore ++;
        }
    }
    return dietObject
}

module.exports = Park