import React from "react";

type Props = {
  setSearch: (setSearch: string) => void;
};

export const Header = ({ setSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <h1>Movies</h1>
      <input className="search-bar" onChange={handleChange} />
    </>
  );
};
