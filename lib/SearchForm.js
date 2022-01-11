import { useState } from "react";

export default function SearchForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });
      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      console.log(result);
      setHits(result["cars"]);
    }
  };
  return (
    <div>
      <h1>Find car</h1>
      <label htmlFor={"search"}>Search </label>
      <input id={"search"} onChange={search} type={"text"} />

      <ul>
        {hits?.map((hit) => (
          <li key={hit.entityId}>
            <img src={hit.image} />
            <p>
              {hit.make} {hit.model} <div>{hit.description}</div>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
