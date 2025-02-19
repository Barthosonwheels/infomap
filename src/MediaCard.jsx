import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

export default function MediaCard({ name, description, logo, link, contact }) {
  return (
    <Card sx={{ display: 'flex', p: 1 }}>
      <Link href={link} target="_blank" rel="noopener noreferrer" sx={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1, textDecoration: 'none' }}>
        <CardMedia
          component="img"
          sx={{
            width: '50px',
            height: '50px',
            maxHeight: '50px',
            objectFit: 'contain',
          }}
          image={logo}
          alt={name}
        />
      </Link>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
           <Typography variant="body2" fontSize="0.6rem" sx={{ mt:0, mb:0 }}>
            {description}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" fontSize="0.8rem" sx={{ m: 0, lineHeight: 1.2 }}>
            {name}
          </Typography>
        </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="website" href={link} target="_blank" rel="noopener noreferrer" size="small">
                <LanguageIcon fontSize="5px" />
            </IconButton>
             <IconButton aria-label="contact" href={`mailto:${contact}`} size="small">
                <EmailIcon fontSize="5px" />
            </IconButton>
            </Box>
      </Box>
    </Card>
  );
}
