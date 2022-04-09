export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=rAYPCSkinjxoTsh5ZGV0tmef7l59UOs7`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

//el async no hace que la funcion getGifs retorne gifs
//sino que devuelve una promesa que resuelve la collection de mis imagenes
