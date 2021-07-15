import { useState } from 'react'
import { arrayEmoji } from '../../mock/emojiData';
import Search from '../search/index'
import './index.css';

const Emoji = () => {

  const [search, setSearch] = useState('')

  return (
    <>     
        <div className="container">
        <Search value={search} event={(ev) => setSearch(ev.target.value)}/>
         {arrayEmoji
         .filter(emoji => emoji.keywords.toLowerCase().includes(search.toLowerCase()))
         .map(({title, symbol}) => (
          <div className="emoji-wrap" key={title}>
            <div className="emoji-container">
              <div className="emoji-symbol">
                <span className="emoji">{symbol}</span>
              </div>
              <div className="emoji-title">
                <p>{title}</p>
              </div>
            </div>
            <button>Copiar</button>
          </div>
         ))}
         
        </div>
      </>
    ) 
}

export default Emoji;
