import React from "react";

const SearchResult = ({ result, id }) => {
  return (
    <div
      className="search-result"
      key={id}
      onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
