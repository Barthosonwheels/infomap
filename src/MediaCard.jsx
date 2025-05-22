import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SimpleMediaItem({ name, description, category, address}) {
  return (
    <div style={{ display: 'flex', padding: '8px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="0.8rem" sx={{ m: 0, lineHeight: 1.2 }}>
            {name}
          </Typography>
          <Typography variant="body" fontWeight="italic" fontSize="0.8rem" sx={{ m: 0, lineHeight: 1.2 }}>
            {category}
          </Typography>
          <Typography variant="body2" fontSize="0.6rem" sx={{ mt:0, mb:0 }}>
            {description}
          </Typography>
          <Typography variant="body2" fontSize="0.6rem" fontWeight="bold" sx={{ mt:0, mb:0 }}>
            {"📍" + address}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
