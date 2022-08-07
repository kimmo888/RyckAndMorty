import './App.css';
import {useState, useEffect, useRef} from 'react';
import { fetchData } from './function.js';

let page = 1;
let initialState = `https://rickandmortyapi.com/api/character/?pages=${page}`;

function App() {
  const [url , setUrl] = useState(initialState);
  const [next, setNext] = useState(null);
  const [preview, setPreview] = useState(null);
  const [pages, setPages] = useState(null);
  const [total, setTotal] = useState(null);
  const [characters, setCharacters] = useState(null);

  const Style = useRef(null);

  useEffect(() => {
    fetchData( url, setNext ,setPreview, setPages, setTotal, setCharacters );
  }, [url]);

  const handleClick = (character,Style) => {
    Style.current.className="imageVisible";
    console.log(character.id);
    console.log(Style.current.className);
  }

  const PreviewButton = (url) => {
    setUrl(url);
    page -= 1;
  }
  const NextButton = (url) => {
    setUrl(url);
    page += 1;
  }


  return (
    <div className="container">
      <div className="header">
        <h2>Rick and Morty</h2>
        <p>total de personajes: {total}</p>
        <p>total de paginas: {pages}</p>
        <p>total de paginas: {page}</p>
        {preview != null ?(
          <button onClick={() => PreviewButton(preview)} >anterior</button>
          ) : ('')}
        {next != null ?(
          <button onClick={() => NextButton(next)} >siguiente</button>
          ) : ('')}
      </div>

      <div className="Characters">
        {characters != null ?(characters.map(character => (
          <ul className="characters" key={character.id}>
            <li className='character' onClick={()=> handleClick(character,Style)} >
              {character.name}  -  Status: {character.status} - Raza: {character.species}
            </li>
            <img ref={Style} className='imageNomVisible ' src={character.image} alt='' />
          </ul>
        ))) : ('')}
      </div>
    </div>
  );
}

export default App;
