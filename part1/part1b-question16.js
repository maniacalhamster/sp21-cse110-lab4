let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

// car only needs to be defined within this loop, so use `let` keyword
for (let car in statistics){
    if (car[0] == 'r' || statistics[car] % 2 == 1){
        console.log(statistics[car]);
    }
}
