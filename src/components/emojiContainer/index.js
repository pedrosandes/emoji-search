import { useState } from 'react'
import { arrayEmoji } from '../../mock/emojiData';
import Search from '../search/index'
import Emoji from '../emoji/index'
import './index.css';

const EmojiContainer = () => {

  const [search, setSearch] = useState('')

  const emojiFiltrado = arrayEmoji.filter(emoji => 
    emoji.keywords.toLowerCase()
      .includes(search.toLowerCase()))

  const emojiPreview = emojiFiltrado.slice(0,5)


  return (
        <div className="container">
        <Search 
        value={search} 
        onChange={(ev) => setSearch(ev.target.value)}
        />

       {emojiPreview.map(({title, symbol}) => (
            <>
            <Emoji title={title} emoji={symbol}/>
            </>
         ))}
         
        </div>
    ) 
}

export default EmojiContainer;
