import './index.css'

const Search = (props) => {
  return (
    <input 
      id="search-input" 
      type="text" 
      placeholder="Pesquisar emoji" 
      value={props.search}
      onChange={props.onChange}
    />
  );
}

export default Search