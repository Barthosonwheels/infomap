import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SimpleMediaItem({ name, description, logo, link, contact }) {
  return (
    <div style={{ display: 'flex', padding: '8px' }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 8, textDecoration: 'none' }}>
        <img
          src={logo}
          alt={name}
          style={{
            width: '50px',
            height: '50px',
            maxHeight: '50px',
            objectFit: 'contain',
          }}
        />
      </a>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="0.8rem" sx={{ m: 0, lineHeight: 1.2 }}>
            {name}
          </Typography>
          <Typography variant="body2" fontSize="0.6rem" sx={{ mt:0, mb:0 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
