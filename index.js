

function receivesAFunction(race){
    race();
}

function raceACar(){
    console.log ("car")
}

receivesAFunction(race);

function returnsANamedFunction (){
    function raceMe(){
        console.log("good")
    };
     
    return raceMe
}

function returnsAnAnonymousFunction(){
    return () => {console.log("anonymous")}
}

