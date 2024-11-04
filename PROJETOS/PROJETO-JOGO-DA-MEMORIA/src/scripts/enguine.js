const emojis = [
    "❤",
    "❤",
    "🤣",
    "🤣",
    "🎶",
    "🎶",
    "💋",
    "💋",
    "😎",
    "😎",
    "🎈",
    "🎈",
    "🤡",
    "🤡",
    "👻",
    "👻"
];
let opernCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
   if(opernCards.length <2){
    this.classlist.add("boxOpen");
    opernCards.push(this);
   }
   if(opernCards.length == 2){
    setTimeout(() => {
        
    }, (checkMatch, 500));
   }
}
function checkMatch(){
    
}

