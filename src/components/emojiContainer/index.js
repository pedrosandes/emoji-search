import { useState } from 'react'
import { arrayEmoji } from '../../mock/emojiData';
import Search from '../search/index'
import Emoji from '../emoji/index'
import './index.css';

const EmojiContainer = () => {

  const [search, setSearch] = useState('')

  return (
        <div className="container">
        <Search 
        value={search} 
        onChange={(ev) => setSearch(ev.target.value)}
        />

       {arrayEmoji
         .filter(emoji => 
          emoji.keywords.toLowerCase().includes(search.toLowerCase()))
         .map(({title, symbol}) => (
            <>
            <Emoji title={title} emoji={symbol}/>
            </>
         ))}
         
        </div>
    ) 
}

export default EmojiContainer;
