import React from 'react';
import { Box, Typography, IconButton, Card, CardContent, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

const favoriteVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -20 }
};

const FavoriteQuotes = ({ favorites, onRemoveFavorite }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Aucune citation favorite pour le moment
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <AnimatePresence mode="popLayout">
        {favorites.map((quote, index) => (
          <Grid item xs={12} key={quote.id || index}>
            <motion.div
              variants={favoriteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                    <IconButton
                      onClick={() => onRemoveFavorite(quote)}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ fontStyle: 'italic', pr: 4 }}
                  >
                    "{quote.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Box>
                      <Typography variant="subtitle1" color="primary">
                        {quote.character}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {quote.anime}
                      </Typography>
                    </Box>
                    <FavoriteIcon color="error" />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </AnimatePresence>
    </Grid>
  );
};

export default FavoriteQuotes;
