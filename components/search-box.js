import { useRef, FC, useState } from "react";

const Search = (props) => {
  const { searchKeyword, setSearchKeyword } = props;
  const inputRef = useRef();

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
        stroke="#666666"
        fill="none"
        strokeWidth="2"
        onClick={handleSearchIconClick}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-search search-icon"
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
        value={searchKeyword}
        className="search-input"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </section>
  );
};

export { Search };
