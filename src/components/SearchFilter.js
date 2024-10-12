import React, { useState } from 'react';

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = profiles.filter(profile =>
      profile.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;