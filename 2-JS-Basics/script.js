/**
 * Created by neven on 25/02/2017.
 */

var birthYears = [1965, 2008, 1992];

var ages = [];


console.log(birthYears);

function printFullAge(birthYears) {
    var output = [];

    for (var i = 0; i < birthYears.length; i++) {
        ages.push(2016 - birthYears[i]);
    }

    for (var i = 0; i < ages.length; i++ ) {
        if (ages[i] >= 18) {
            output.push(true);
        } else  {
            output.push(false);
        }
    }

    console.log(output);

}


printFullAge(birthYears);