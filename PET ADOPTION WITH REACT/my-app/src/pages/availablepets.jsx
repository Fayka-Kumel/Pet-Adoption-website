import React, { useState } from "react";
import { Link } from "react-router-dom";

const petsData = [
  {
    name: "Charlie",
    breed: "Beagle",
    age: "1 year",
    description: "Friendly and energetic, loves to play fetch!",
    tags: "dog beagle young friendly energetic fetch charlie 1 year",
    image: "image/Pets available images/charlie.jpg",
  },
  {
    name: "Max",
    breed: "Border Collie",
    age: "3 years",
    description: "Active and adventurous, perfect hiking companion!",
    tags: "dog border collie adult active adventurous max 3 years",
    image: "image/Pets available images/max.jpg",
  },
  {
    name: "Rocky",
    breed: "Mixed breed",
    age: "3 months",
    description: "Playful kitten with lots of love to give!<br>",
    tags: "cat mixed breed kitten playful rocky 3 months",
    image: "image/Pets available images/Rocky.png",
  },
  {
    name: "Luna",
    breed: "Scottish Fold",
    age: "2 years",
    description: "Calm and gentle, loves quiet afternoons by the window.",
    tags: "cat scottish fold young calm luna 2 years",
    image: "image/Pets available images/Scottish Fold.webp",
  },
  {
    name: "Bella",
    breed: "Highlander",
    age: "3 years",
    description: "Sweet and cuddly, perfect lap cat for cozy evenings.",
    tags: "cat highlander adult sweet bella 3 years",
    image: "image/Pets available images/bella.jpg",
  },
  {
    name: "Milo",
    breed: "Golden Retriever",
    age: "4 years",
    description: "Loyal companion, great with kids and other pets.",
    tags: "dog golden retriever adult loyal milo 4 years",
    image: "image/Pets available images/milo.jpg",
  },
];

const filters = [
  { label: "All Pets", value: "all" },
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
  { label: "Beagle", value: "beagle" },
  { label: "Border Collie", value: "border collie" },
  { label: "Mixed Breed", value: "mixed breed" },
  { label: "Scottish Fold", value: "scottish fold" },
  { label: "Highlander", value: "highlander" },
  { label: "Golden Retriever", value: "golden retriever" },
  { label: "Under 1 year", value: "kitten" },
  { label: "1–3 years", value: "young" },
  { label: "3–5 years", value: "adult" },
  { label: "5+ years", value: "senior" },
];

const AvailablePets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPets = petsData.filter((pet) => {
    const tags = pet.tags.toLowerCase();
    const matchesFilter =
      activeFilter === "all" || tags.includes(activeFilter.toLowerCase());
    const matchesSearch =
      searchTerm === "" || tags.includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main>
      {/* Header */}
      <div id="available-h-and-p">
        <h2>Available Pets</h2>
        <p>Meet your new friends</p>
      </div>

      {/* Search + Filters */}
      <div className="search-filter-section">
        <input
          type="text"
          id="searchInput"
          className="search-input"
          placeholder="Search by name, breed, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${
                activeFilter === filter.value ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredPets.length === 0 && (
        <div id="no-results" className="no-results">
          <p>No pets found matching your search. Try different keywords!</p>
        </div>
      )}

      {/* Pet Cards */}
      <div className="container">
        {filteredPets.map((pet) => (
          <div key={pet.name} className="card">
            <img src={pet.image} alt={`${pet.breed} image`} />
            <div className="pet-description">
              <div className="pet-text">
                <p className="pet-name">{pet.name}</p>
                <p>{pet.breed}</p>
                <p>{pet.description}</p>
                <p>🗓️{pet.age}</p>
              </div>
              <Link to="/contact">
                <button className="meet">Meet {pet.name}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AvailablePets;