import React, { useState, useEffect } from 'react';
import { Container, Button, Box, Typography, CircularProgress, ThemeProvider, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import RefreshIcon from '@mui/icons-material/Refresh';
import QuoteCard from './components/QuoteCard';
import FavoriteQuotes from './components/FavoriteQuotes';
import AnimatedBackground from './components/AnimatedBackground';
import theme from './theme';
import './styles.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteQuotes');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTab, setActiveTab] = useState(0);

  const getBackgroundColor = (category) => {
    const colors = {
      motivation: '#e3f2fd',
      amour: '#fce4ec',
      philosophie: '#f3e5f5',
      combat: '#ffebee',
      aventure: '#e8f5e9',
      humour: '#fff3e0',
      science: '#e1f5fe',
      default: '#f0f2f5'
    };
    return colors[category] || colors.default;
  };

  const fetchRandomQuote = useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(process.env.REACT_APP_API_URL || 'https://votre-backend-url.onrender.com/api/quotes/random')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => {
        setQuote(data);
        setBgColor(getBackgroundColor(data.quote.category));
      })
      .catch(error => {
        console.error('Erreur:', error);
        setError('Erreur lors de la récupération de la citation. Veuillez réessayer.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (quote) => {
    setFavorites(prevFavorites => {
      const quoteExists = prevFavorites.some(fav => fav.text === quote.text);
      if (quoteExists) {
        return prevFavorites.filter(fav => fav.text !== quote.text);
      } else {
        return [...prevFavorites, quote];
      }
    });
  };

  const isQuoteFavorite = quote?.quote ? 
    favorites.some(fav => fav.text === quote.quote.text) : 
    false;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <AnimatedBackground />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              component="h1"
              align="center"
              sx={{
                mb: 4,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Citations d'Anime
            </Typography>
          </motion.div>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
              <Tab label="Citations Aléatoires" />
              <Tab label={`Favoris (${favorites.length})`} />
            </Tabs>
          </Box>

          {activeTab === 0 ? (
            <>
              {loading ? (
                <Box display="flex" justifyContent="center" my={4}>
                  <CircularProgress size={40} />
                </Box>
              ) : error ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography color="error" align="center" sx={{ my: 4 }}>
                    {error}
                  </Typography>
                </motion.div>
              ) : (
                quote && (
                  <>
                    <QuoteCard 
                      quote={quote} 
                      onToggleFavorite={handleToggleFavorite}
                      isFavorite={isQuoteFavorite}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={fetchRandomQuote}
                          startIcon={<RefreshIcon />}
                          sx={{
                            borderRadius: '50px',
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            '&:hover': {
                              boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
                            }
                          }}
                        >
                          Nouvelle Citation
                        </Button>
                      </motion.div>
                    </Box>
                  </>
                )
              )}
            </>
          ) : (
            <FavoriteQuotes 
              favorites={favorites} 
              onRemoveFavorite={(quote) => handleToggleFavorite(quote)} 
            />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
