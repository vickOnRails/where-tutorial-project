import { useRef, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleInputFocus = (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleInputBlur = (e) => {
    const parent = e.target.parentNode;
    parent.classList.remove("focus");
  };

  const handleSearchIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <section className="search-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="search-icon"
        stroke="#666666"
        fill="none"
        stroke-width="2"
        onClick={handleSearchIconClick}
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        ref={inputRef}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        placeholder="Start typing to find a state..."
        value={searchText}
        className="search-input"
        onChange={handleSearchTextChange}
      />
    </section>
  );
};

export { Search };
