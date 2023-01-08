// import Layout from '../../components/layout';

export default function Post() {
  return <div>Hello</div>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
