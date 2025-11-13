function beerSong() {
    var numberOfBottles = 99
    while (numberOfBottles >= 0) {
        var bottleWord;
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        } else{
            bottleWord = "bottles";
        }
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
    	--numberOfBottles;
        if (numberOfBottles === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
        }else{
             console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
        }
       
    }
    // console.log("")
}
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.
//No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
//6 bottles of beer on the wall, 6 bottles of beer.
// Take one down and pass it around, 5 bottles of beer on the wall.