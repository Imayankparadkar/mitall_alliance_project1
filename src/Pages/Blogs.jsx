import React, { useState, useEffect } from 'react';
// Corrected the import path to use your new Header component
import Header from '../Components/Core/Header/Header_New';
// Import useNavigate to handle navigation
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData'; // Assuming blogData.js is in src/data

const Blogs = () => {
  // State to track which card is being hovered over
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const navigate = useNavigate();
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get responsive styles
  const getResponsiveStyles = () => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    const responsiveStyles = {
      hero: {
        height: isMobile ? '300px' : '450px', // Adjusted to new base height
      },
      heroTitle: {
        fontSize: isMobile ? '4rem' : '8rem',
      },
      heroSubtitle: {
        fontSize: isMobile ? '1rem' : '1.5rem',
      },
      mainContent: {
        padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      },
      grid: {
        gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
      },
      card: {
        width: '100%', // Full width on all screen sizes, grid handles the layout
      }
    };
    return responsiveStyles;
  };

  const responsive = getResponsiveStyles();

  return (
    <div style={styles.pageContainer}>
      <Header />
      {/* Line divider image added between Header and Hero */}
      <img src="/Blog/line.png" alt="divider" style={styles.lineDivider} />

      <div style={{...styles.hero, ...responsive.hero}}>
        
        <img src="/Blog/arrow_pattern.png" alt="arrow pattern" style={styles.arrowPattern} />
      </div>

      <main style={{...styles.mainContent, ...responsive.mainContent}}>
        {/* Title for the blog grid */}
        <div style={styles.sectionTitleContainer}>
            <h2 style={styles.sectionTitle}>BLOGS</h2>
            <div style={styles.titleUnderline}></div>
        </div>
        
        <div style={{...styles.grid, ...responsive.grid}}>
          {blogPosts.map(post => {
            // Combine base and hover styles based on the current state
            const cardStyle = {
              ...styles.card,
              ...responsive.card,
              ...(post.id === hoveredCardId ? styles.cardHover : {}),
            };

            return (
              <div 
                key={post.id} 
                style={cardStyle} 
                onClick={() => handleCardClick(post.id)}
                // Set the hovered card ID on mouse enter
                onMouseEnter={() => setHoveredCardId(post.id)}
                // Reset the hovered card ID on mouse leave
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <img src={post.imageUrl} alt={post.alt} style={styles.cardImage} />
                <div style={styles.cardTextContainer}>
                  <h3 style={styles.cardTitle}>{post.alt}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

// CSS-in-JS for styling to match the provided image.
const styles = {
  pageContainer: {
    backgroundColor: '#fff',
  },
  lineDivider: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  hero: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('/Blog/blog 1.png')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF',
  },
  heroText: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  heroTitle: {
    fontWeight: '900',
    margin: '0',
    textTransform: 'uppercase',
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.7)',
  },
  heroSubtitle: {
    marginTop: '0.5rem',
    fontWeight: 400,
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
  },
  arrowPattern: {
    position: 'absolute',
    bottom: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '80px',
    width: 'auto',
    zIndex: 2,
  },
  mainContent: {
    backgroundColor: 'transparent',
    margin: '0 auto',
    maxWidth: '1600px',
  },
  sectionTitleContainer: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'rgba(208, 161, 81, 1)',
    display: 'inline-block',
    margin: 0,
    paddingBottom: '0.5rem',
  },
  titleUnderline: {
      height: '4px',
      width: '60px',
      backgroundColor: 'rgba(208, 161, 81, 1)',
      margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    cursor: 'pointer',
    // Added transition for smooth animation
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  cardHover: {
    // This style is applied on hover
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
  },
  cardTextContainer: {
    backgroundColor: 'rgba(208, 161, 81, 1)',
    padding: '1rem',
    textAlign: 'center',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: '1.1rem',
    margin: 0,
    fontWeight: '600',
  },
};

export default Blogs;