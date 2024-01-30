import EmojiCard from '..//emojicard/emojicard';
import './emojilist.css'

function EmojiList({data}) {
    return ( 
        <div className="emojiList">
            <div className="container">
                {data.map((card) => {
                    return <EmojiCard 
                    symbol={card.symbol}
                    title={card.title}
                    keywords={card.keywords}
                    />
                })}
            </div>
        </div>
     );
}

export default EmojiList;