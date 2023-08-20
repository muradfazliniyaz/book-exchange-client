import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../Contexts/BookContext";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { bookList } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    // Kitap listesinde arama yap
    const results = bookList.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)

    );

    // Arama sonuçlarını farklı bir sayfada görüntülemek için yönlendirme yap
    navigate("/search-results", { state: { results } });
  };

  return (
    <div>
      <input
      className="search-field"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Title, Author, Category"
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;



