import React from "react";
import "../style/header.scss";

type Props = {
  setSearch: (setSearch: string) => void;
};

export const Header = ({ setSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="header">
      <h1 className="title">Movies</h1>
      <input
        className="search-bar"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};
