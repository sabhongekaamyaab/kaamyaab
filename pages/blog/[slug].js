import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostData } from '../../lib/markdown'
import EmailForm from '../../components/EmailForm'

export default function Post({ postData }) {
  return (
    <Layout title={`${postData.title} | Kaamyaab India`}>
      <article className="blog-post">
        <h1>{postData.title}</h1>
        <div className="post-meta">
          <time dateTime={postData.date}>
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
        <EmailForm />
      </article>
      
      <style jsx>{`
        .blog-post {
          max-width: 800px;
          margin: 0 auto;
        }
        .post-meta {
          color: #666;
          margin-bottom: 2rem;
        }
        .post-content {
          line-height: 1.6;
        }
        .post-content h1,
        .post-content h2,
        .post-content h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .post-content p {
          margin-bottom: 1.5rem;
        }
        .post-content ul,
        .post-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}