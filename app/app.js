
function getCharacters(done) {
  const personajes = fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25]")
  .then((res) => res.json())
  .then((res) => done(res))
  .catch((err) => console.error(err));
};

getCharacters(data => {
  data.forEach(personaje => {
    const article = document.createRange().createContextualFragment(`
  <article>
    <div class="image-container">
        <img src="${personaje.image}" alt="personajes">
    </div>

    <h2>${personaje.name}</h2>
    <span> Status:${personaje.status}</span>
    <span> Gender:${personaje.gender}</span>
    <span> Species:${personaje.species}</span>
</article>
 `);

 const main = document.querySelector("main");
 main.append(article);
  });

})

