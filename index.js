const names= ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names) {
let messages = [];
  for (let i = 0;  i < names.length; i++) {
  messages.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
     }
 return messages;
 }




function countDown(){
  let countdown = 10;
  while (countdown >= 0){
    console.log(countdown)
    countdown--;
  }
}