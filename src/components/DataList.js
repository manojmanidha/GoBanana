import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const DataList = ({ data }) => {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} secondary={item.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default DataList;
