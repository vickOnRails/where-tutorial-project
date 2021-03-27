import { useState } from "react";
import Image from "next/image";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section className="search-container">
      <Image src="/search.svg" aria-label="search" height="20" width="20" />
      <input
        type="text"
        placeholder="Search State"
        value={searchText}
        className="search-input"
        onChange={handleSearchTextChange}
      />
    </section>
  );
};

export { Search };
