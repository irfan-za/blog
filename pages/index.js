import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Layout } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <Layout
      title="Z Blog"
      desc="Sebuah blog untuk menuliskan berbagai pemikiran."
      img="https://z-blog.vercel.app/z.png"
    >
      <div className="container mx-auto px-3 lg:px-10 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

