// pages/blog/index.js
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts } from '../../lib/markdown'

export default function Blog({ posts }) {
  return (
    <Layout title="Blog | My Website">
      <div className="blog-container">
        <h1>Blog</h1>
        <p>Check out our latest posts and updates.</p>
        
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.slug} className="post-card">
              <h2>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
              <p className="post-description">{post.description}</p>
              <Link href={`/blog/${post.slug}`}>
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .blog-container {
          padding: 1rem 0;
        }
        .posts-grid {
          margin-top: 2rem;
          display: grid;
          gap: 2rem;
        }
        .post-card {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 1.5rem;
          transition: box-shadow 0.3s ease;
        }
        .post-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .post-card h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }
        .post-card h2 a {
          color: #333;
          text-decoration: none;
        }
        .post-date {
          color: #666;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .read-more {
          display: inline-block;
          margin-top: 1rem;
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
