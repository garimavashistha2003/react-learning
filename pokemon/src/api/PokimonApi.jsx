

import React, { useEffect, useState } from "react";
import "./PokimonApi.css";

const PokemonApi = ({searchTerm}) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Step 1: get list of 20 Pokémon
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        const pokemonDetails = [];

        // Step 2: loop through each URL and fetch detail
        for (const p of data.results) {
          const detailRes = await fetch(p.url);
          const detailData = await detailRes.json();

          pokemonDetails.push({
            id: detailData.id,
            name: detailData.name,
            image: detailData.sprites.other["official-artwork"].front_default,
            types: detailData.types.map((t) => t.type.name),
          });
        //   console.log(data.results);
        //results is inside the data , ressults is array containing list of 20 pokmons 
        }

        setPokemon(pokemonDetails);

      } catch (err) {
        setError( err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if(error){
    return <h2> Error : {error}</h2>
}

  if (loading) return <h2>Loading Pokemon...</h2>;


    // 2. Filter Pokémon based on search term
    const filteredPokemon = pokemon.filter(p =>
        p.name.toLowerCase().includes(searchTerm)
      );


      


return (
    <div>
      <h1 className="pokemon-title">Pokemon List</h1>
      <div className="pokemon-container">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((p) => (
            <div className="pokemon-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p><strong>Type :</strong> {p.types.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No Pokémon found.</p>
        )}
      </div>
    </div>
  );

};

export default PokemonApi;
