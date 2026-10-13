class Passenger {
    constructor(name, passport, hasTicket) {
        this.name = name;
        this.passport = passport;
        this.hasTicket = hasTicket;
    }
}

const passengers = [
    new Passenger("Loiq", "PS1256354", true),
    new Passenger("Ardasher", "AB263589", false),
    new Passenger("Abdurahman", "KS2036412", true),
    new Passenger("Muminjon", "SE6365215", false)
]

class CheckIn {
    findPassenger(passport) {
        return new Promise((resolve, reject) => {
            console.log("Пожалуйста подождите")
            setTimeout(() => {
                for (let i = 0; i < passengers.length; i++) {
                    if (passengers[i].passport == passport) {
                        resolve(passengers[i]);
                        return
                    }
                }
                reject("Пассажир не найден")
            }, 1000);
        })
    }
    checkTicket(passenger){
        return new Promise((resolve, reject) =>{
                if(passenger.hasTicket == true){
                    resolve(`Хорошего полёта ${passenger.name}`);
                }
                else{
                    reject(`${passenger.name} вам отказано во въезде в эту страну, вы не сможете вылететь`);
                }
        });
    }
}


let checkIn = new CheckIn()

checkIn.findPassenger("KS2036412")
    .then((passenger) =>{
        return checkIn.checkTicket(passenger);
    })
    .then((massege) =>{
         console.log(massege);
    })
    .catch((err) => {
        console.log(err)
    })