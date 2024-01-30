import { data } from './emoji.js'

const emojilistcontainer = document.querySelector(".emojilistcontainer");

function emojiOutput(keyword) {
    data.forEach(emoji => {
        if (emoji.keywords.includes(keyword)) {
            let emojibox = document.createElement('div');
            emojibox.className = "emojibox"
        
            let emojisymbol = document.createElement('h1')
            emojisymbol.append(emoji.symbol)
        
            let emojititle = document.createElement('h2')
            emojititle.append(emoji.title)
        
            let emojikeys = document.createElement('p')
            emojikeys.append(emoji.keywords)
        
            emojibox.append(emojisymbol)
            emojibox.append(emojititle)
            emojibox.append(emojikeys)
        
            emojilistcontainer.append(emojibox)
        }
    });
}

emojiOutput("")

function find(keyword) {
    emojilistcontainer.innerHTML = ''
    emojiOutput(keyword)
}

let inputToFind = document.getElementById("emoji")
inputToFind.onchange = function() {
    let keywords = document.getElementById("emoji").value
    find(keywords)
}

