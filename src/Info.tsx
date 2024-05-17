import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Neo-Test Team',
    desc: 'AI-Powered Test Automation Suite',
  }
 

];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        TEST Enviroment
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
        
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
