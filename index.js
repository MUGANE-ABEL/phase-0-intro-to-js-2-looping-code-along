// Code your solutions in this file

let names = []
function writeCards(names, event) {
  let messages= []
  for (let i = 0; i < names.length; i++) {
  messages.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`)
}
console.log(messages)
}

writeCards(["tommy", "zacchy", "grace"], "birthday")

function countDown(num){
let i = 0
while (i<= num){
  console.log(num-i);
  i++
}
}

countDown(15)