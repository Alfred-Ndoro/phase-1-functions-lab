function distanceFromHqInBlocks (pickuplocation) {
    const headquarters = 42;
    return Math.abs (pickuplocation - headquarters);
}

function distanceFromHqInFeet (pickuplocation) {
    const blocks = distanceFromHqInBlocks(pickuplocation);
    return blocks * 264;
}

function distanceTravelledInFeet (start, destination){
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet (start, destination) > 400 && distanceTravelledInFeet (start, destination) < 2000){
        return ((distanceTravelledInFeet (start, destination) - 400) * 0.02);
    }
    else if (distanceTravelledInFeet (start, destination) > 2000 && distanceTravelledInFeet (start, destination) < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log(distanceTravelledInFeet(34, 38));