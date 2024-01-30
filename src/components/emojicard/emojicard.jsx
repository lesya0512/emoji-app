import './emojicard.css'

function EmojiCard({symbol, title, keywords}) {
    return (
        <div className="emojibox">
            <h1>{symbol}</h1>
            <h2>{title}</h2>
            <p>{keywords}</p>
        </div>
    )
}

export default EmojiCard;