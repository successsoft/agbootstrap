function abbrNum(number, decPlaces) {
    var orig = number;
    var dec = decPlaces;
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["k", "m", "b", "t"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            var number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // console.log(number);
            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    console.log('abbrNum('+ orig + ', ' + dec + ') = ' + number);
    return number;
}

abbrNum(999995, 4); //       => 999.995k
abbrNum(999995, 2); //       => 1m
abbrNum(999900000,0); //     => 1b
abbrNum(999999900000000,0);//=> 1000t
abbrNum(12 , 1); //          => 12
abbrNum(0 , 2); //           => 0
abbrNum(1234 , 0); //        => 1k
abbrNum(34567 , 2); //       => 34.57k
abbrNum(918395 , 1); //      => 918.4k
abbrNum(2134124 , 2); //     => 2.13m
abbrNum(47475782130 , 2); // => 47.48b