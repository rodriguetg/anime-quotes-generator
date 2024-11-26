import React, { useState } from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  Box
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, category });
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mb: 4,
        borderRadius: 2
      }}
      elevation={3}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Rechercher une citation..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box sx={{ minWidth: 120, mr: 1 }}>
        <FormControl fullWidth size="small">
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
          >
            <MenuItem value="all">Toutes catégories</MenuItem>
            <MenuItem value="motivation">Motivation</MenuItem>
            <MenuItem value="friendship">Amitié</MenuItem>
            <MenuItem value="love">Amour</MenuItem>
            <MenuItem value="philosophy">Philosophie</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
