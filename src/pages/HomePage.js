import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import MyAppBar from '../components/AppBar';
import DataList from '../components/DataList';
import SearchBar from '../components/SearchBar';
import { fetchUsers } from '../services/api';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getData = async () => {
      const users = await fetchUsers();
      setData(users);
      setFilteredData(users);
    };
    getData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div>
      <MyAppBar />
      <Container>
        <Box my={4}>
          <SearchBar onChange={setSearchTerm} />
          <DataList data={filteredData} />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
