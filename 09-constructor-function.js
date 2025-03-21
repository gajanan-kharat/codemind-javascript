
function Player(name, totalRuns, ranking){
    this.name = name;
    this.totalRuns = totalRuns;
    this.ranking = ranking;
}

Player.prototype.country = "India";

const playerKohli = new Player("Virat Kohli", "40K", 1);
console.log(playerKohli);

const playerRohit = new Player("Rohit Sharma", "30K", 4);
console.log(playerRohit);
console.log(playerRohit.country);


const playerYas = new Player("Yashawi Jashwal", "2K", 2);
console.log(playerYas);

const playerBum = new Player("Bumrah", "1K", 6);
console.log(playerBum);
console.log(playerBum.country);


// const array = [10, 20, 30];
// array.push(90);