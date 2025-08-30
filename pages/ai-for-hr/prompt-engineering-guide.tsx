import Layout from '../../components/Layout'
import GatedContent from '../../components/GatedContent'

export default function GatedPage() {
  return (
    <Layout>
      <GatedContent pageId="unique-page-identifier">
        {/* Your gated content goes here */}
        <h1>Premium Content</h1>
        <p>This content is only visible after providing contact information.</p>
      </GatedContent>
    </Layout>
  )
}