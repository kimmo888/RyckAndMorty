export const fetchData = async ( url, stNext ,stPreview, stPages, stTotal, stCharacters ) => {
    const response = await fetch(url);
    const {info, results} = await response.json();
    stNext(info.next);
    info.prev != null ? stPreview(info.prev) : stPreview(null);
    stPages(info.pages);
    stTotal(info.count);
    stCharacters(results);
    //console.log(info, results);
}

export const getCharacters = async (id,stPersonaje) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const {results} = await response.json();
    stPersonaje(results);
    console.log(id);
}
