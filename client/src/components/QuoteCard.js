import React from 'react';
import { Card, CardContent, Typography, IconButton, Box, useTheme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@mui/styled-engine';

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const quoteIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const shareIconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

const favoriteIconVariants = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.3, 1], transition: { duration: 0.3 } }
};

const StyledCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
  },
}));

const QuoteCard = ({ quote: quoteData, onToggleFavorite, isFavorite }) => {
  const theme = useTheme();

  if (!quoteData || !quoteData.quote) return null;

  const { quote, shareLinks } = quoteData;

  const getShareUrl = (platform) => {
    if (shareLinks && shareLinks[platform]) {
      return shareLinks[platform];
    }
    
    const text = encodeURIComponent(`"${quote.text}" - ${quote.character} (${quote.anime})`);
    switch (platform) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?text=${text}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${text}`;
      case 'whatsapp':
        return `https://wa.me/?text=${text}`;
      default:
        return '';
    }
  };

  return (
    <AnimatePresence mode="wait">
      <StyledCard
        key={quote.text}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="quote-card-container"
      >
        <motion.div
          variants={quoteIconVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            top: -20,
            left: -20,
            background: theme.palette.primary.main,
            borderRadius: '50%',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        >
          <FormatQuoteIcon sx={{ color: 'white', fontSize: 30 }} />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            zIndex: 1
          }}
          whileHover="hover"
          whileTap="tap"
          variants={shareIconVariants}
        >
          <IconButton
            onClick={() => onToggleFavorite(quote)}
            sx={{
              background: theme.palette.background.paper,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                background: theme.palette.background.paper,
              }
            }}
          >
            <motion.div
              variants={favoriteIconVariants}
              animate={isFavorite ? "animate" : "initial"}
            >
              {isFavorite ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </motion.div>
          </IconButton>
        </motion.div>

        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontWeight: 500,
              lineHeight: 1.6,
              fontStyle: 'italic',
              color: theme.palette.text.primary
            }}
          >
            "{quote.text}"
          </Typography>

          <Box sx={{ mt: 3, textAlign: 'right' }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              {quote.character}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontStyle: 'italic' }}
            >
              {quote.anime}
            </Typography>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {['twitter', 'facebook', 'whatsapp'].map((platform) => (
              <motion.div
                key={platform}
                whileHover="hover"
                whileTap="tap"
                variants={shareIconVariants}
              >
                <IconButton
                  href={getShareUrl(platform)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: {
                      twitter: '#1DA1F2',
                      facebook: '#4267B2',
                      whatsapp: '#25D366'
                    }[platform],
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  {platform === 'twitter' && <TwitterIcon />}
                  {platform === 'facebook' && <FacebookIcon />}
                  {platform === 'whatsapp' && <WhatsAppIcon />}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </StyledCard>
    </AnimatePresence>
  );
};

export default QuoteCard;
