let favorites = JSON.parse(sessionStorage.getItem('favorites22'));  

window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch

try {
  const response = await fetch('http://localhost:3031/api/movies');
  const result = await response.json()
  const {meta,data} = result 

  data.forEach((movie) => {
    if(favorites.includes(movie.id)) {

      const card = document.createElement("div");
      card.setAttribute("class", "card");
      
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;
      
      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;
      
      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;
      
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    }
    });
     
} catch (error) {
  console.log(error)
}
    let data = peliculas.data;

   
  
};
