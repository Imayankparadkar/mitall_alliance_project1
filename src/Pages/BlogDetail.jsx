import React from 'react';
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

    // If the post is found, render the detail page.
    return (
        <div style={styles.pageContainer}>
            <Header />
            <img src="/Blog/line.png" alt="divider" style={styles.lineDivider} />
            
            {/* Hero banner section */}
            <div style={styles.hero}>
                {/* The arrow pattern is now inside the hero container for positioning */}
                <img src="/Blog/arrow_pattern.png" alt="arrow pattern" style={styles.arrowPattern} />
            </div>

            <main style={styles.mainContent}>
                <h1 style={styles.title}>{post.alt}</h1>
                <img src={post.imageUrl} alt={post.alt} style={styles.mainImage} />

                {/* LinkedIn Image */}
                <img src="/Blog/linkedin.png" alt="linkedin" style={styles.linkedinImage} />

                {/* Meta container with author and social icons has been removed */}

                <article style={styles.blogContent}>
                    <h2 style={styles.secondaryHeading}>EXPLORING THE FUTURE OF SPACE TECHNOLOGY: INSIGHTS FROM A LEADING CEO</h2>
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
        height: '450px',
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
        padding: '6rem 2rem 3rem', // Increased top padding to make space for the arrow
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'rgba(208, 161, 81, 1)', // Updated blog heading color
    },
    mainImage: {
        width: '100%',
        height: '250px', // Made the image smaller
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
        height: '150px', 
        objectFit: 'cover',
        borderRadius: '8px',
    },
    secondaryHeading: {
        fontSize: '1.25rem', // Made the heading smaller
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