import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Core/Header/Header_New';
import { ArrowLeft } from 'lucide-react';
// This is the crucial change: Import the single source of truth for your blog data.
import { blogPosts } from '../data/blogData'; // Make sure this path is correct for your project structure.

const BlogDetail = () => {
    // Get the blog post ID from the URL (e.g., /blog/5)
    const { id } = useParams(); 
    const navigate = useNavigate();
    // Find the specific blog post from the imported array that matches the ID from the URL
    const post = blogPosts.find(p => p.id === parseInt(id));
    // State to track window width for responsive design
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Effect to update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // If no post with that ID is found, display a message.
    if (!post) {
        return (
            <div>
                <Header />
                <div style={{textAlign: 'center', padding: '4rem'}}>
                    <h1>Blog post not found</h1>
                    <button onClick={() => navigate('/blogs')} style={styles.backButton}>
                        <ArrowLeft size={18} style={{ marginRight: '8px' }} />
                        Back to Blog
                    </button>
                </div>
            </div>
        );
    }
    
    // Function to get responsive styles
    const getResponsiveStyles = () => {
        const isMobile = windowWidth < 768;

        return {
            hero: {
                height: isMobile ? '250px' : '450px',
            },
            mainContent: {
                padding: isMobile ? '4rem 1rem 2rem' : '6rem 2rem 3rem',
            },
            title: {
                fontSize: isMobile ? '1.8rem' : '2.5rem',
            },
            mainImage: {
                height: isMobile ? 'auto' : '250px',
            },
            linkedinImage: {
                height: isMobile ? 'auto' : '150px',
            },
            secondaryHeading: {
                fontSize: isMobile ? '1.1rem' : '1.25rem',
            },
        };
    };
    
    const responsive = getResponsiveStyles();

    // If the post is found, render the detail page.
    return (
        <div style={styles.pageContainer}>
            <Header />
            <img src="/Blog/line.png" alt="divider" style={styles.lineDivider} />
            
            {/* Hero banner section */}
            <div style={{...styles.hero, ...responsive.hero}}>
                {/* The arrow pattern is now inside the hero container for positioning */}
                <img src="/Blog/arrow_pattern.png" alt="arrow pattern" style={styles.arrowPattern} />
            </div>

            <main style={{...styles.mainContent, ...responsive.mainContent}}>
                <h1 style={{...styles.title, ...responsive.title}}>{post.alt}</h1>
                <img src={post.imageUrl} alt={post.alt} style={{...styles.mainImage, ...responsive.mainImage}} />

                {/* LinkedIn Image */}
                <img src="/Blog/linkedin.png" alt="linkedin" style={{...styles.linkedinImage, ...responsive.linkedinImage}} />

                {/* Meta container with author and social icons has been removed */}

                <article style={styles.blogContent}>
                    <h2 style={{...styles.secondaryHeading, ...responsive.secondaryHeading}}>EXPLORING THE FUTURE OF SPACE TECHNOLOGY: INSIGHTS FROM A LEADING CEO</h2>
                    {/* The full content for the blog post is now displayed from your data file */}
                    <p>{post.content}</p>
                </article>

                {/* Underline added above the back button */}
                <div style={styles.separatorLine}></div>

                <button onClick={() => navigate('/blogs')} style={styles.backButton}>
                    <ArrowLeft size={18} style={{ marginRight: '8px' }} />
                    Back to Blog
                </button>
            </main>
        </div>
    );
};

// CSS-in-JS for styling to match your design
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
        position: 'relative', // Needed for absolute positioning of the arrow
        width: '100%',
        backgroundImage: "url('/Blog/blog 1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    arrowPattern: {
        position: 'absolute',
        bottom: '-40px', // Position the arrow overlapping the bottom edge
        left: '50%',
        transform: 'translateX(-50%)',
        height: '80px',
        width: 'auto',
        zIndex: 2,
    },
    mainContent: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'rgba(208, 161, 81, 1)', // Updated blog heading color
    },
    mainImage: {
        width: '100%',
        borderRadius: '8px',
        marginBottom: '2rem',
        display: 'block',
        margin: '0 auto 2rem', // Center the image
        objectFit: 'cover',
    },
    linkedinImage: {
        display: 'block',
        margin: '0 auto 2rem', // Center the image
        width: '100%', // Larger, rectangular image
        objectFit: 'cover',
        borderRadius: '8px',
    },
    secondaryHeading: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '1.5rem',
        textAlign: 'center', // Added center alignment
    },
    blogContent: {
        lineHeight: '1.8',
        fontSize: '1.1rem',
        color: '#444',
        textAlign: 'justify', // Justify the blog content
    },
    separatorLine: {
        height: '1px',
        backgroundColor: 'rgba(115, 115, 115, 1)',
        margin: '3rem 0 1.5rem 0',
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: '#D0A151',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1rem',
    },
};

export default BlogDetail;
