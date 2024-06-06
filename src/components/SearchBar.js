import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onChange }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
