"use strict"
// kamus
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// kamus

// data
var database = fs.readFileSync('data.json')
var data = JSON.parse(database)
// data

// welcome
console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!");
// Welcome

// create inteface (pousedoucode)
// interface.setPrompt(pertanyaan)
// interface.prompt()
// var i =0
//
// if (i < data.length) {
//   if (jawaban benar) {
//     interface.setPrompt(next_pertanyaan)
//     interface.prompt()
//     i++
//   } else {
//     interface.prompt()
//   }
//
// }

// setting
var i = 0
// var answer = "";
// settinganswer = "";

// proses reqursiv
function permainan(answer){
  if(i == ( data.length )){
    rl.close();
  }else{

    rl.question(data[i].pertanyaan + " : ", (answer) => {
      if(data[i].answer == answer){
        console.log("\n selamat anda benar!");
        i++
        permainan(answer)
      }else{
        console.log("jawaban anda salah! tebak lagi");
        permainan(answer)
      }

    });
  }
}

permainan("")
