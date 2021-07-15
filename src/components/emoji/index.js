import './index.css'

const Emoji = (props) => {
  return (
      <div className="emoji-wrap" key={props.title}>
        <div className="emoji-container">
          <div className="emoji-symbol">
            <span className="emoji">{props.emoji}</span>
          </div>
          <div className="emoji-title">
            <p>{props.title}</p>
          </div>
        </div>
          <button>Copiar</button>
      </div>
  ); 
}

export default Emoji