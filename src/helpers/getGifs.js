export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=h1iwSI4L0M0CnxlJuV0ZJw8AM1kbaVBB&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url
    }
  });
  console.log(gifs);
  return gifs;
}