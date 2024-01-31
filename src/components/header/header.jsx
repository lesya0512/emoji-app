import { useEffect, useState } from 'react';
import './header.css'


function Header({filteredEmoji, setFilteredEmoji, data}) {

    const [findWords, setFindWords] = useState("")

    const filterByFindWords = () => {
        let newEmoji = []

        data.forEach((emoji) => {
            if((emoji.title.toLowerCase().includes(findWords.toLowerCase())) || (emoji.keywords.toLowerCase().includes(findWords.toLowerCase()))) {
                newEmoji.push(emoji)
            }
        });
        setFilteredEmoji(newEmoji)
    }

    useEffect(() => {
        if (findWords.length > 0) {
            filterByFindWords()
        } else {
            setFindWords("")
        }
    }, [findWords])

    return ( 
        <header>
            <h1>Emoji Finder</h1>
            <p>Find emoji by keywords</p>

            <input type="text" placeholder="placeholder" id="inputToFind" className="inputToFind" onChange={(findWords) => {setFindWords(findWords.target.value)}}/>

        </header>  
    );
}

export default Header;