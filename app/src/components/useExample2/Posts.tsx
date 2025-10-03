import { Suspense, use, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchRandomPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allPosts: Post[] = await res.json();

  // Shuffle array and take first 5
  const shuffled = [...allPosts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

const PostItems = ({ postPromise }: { postPromise: Promise<Post[]> }) => {
  const posts = use(postPromise);

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id} className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700 mt-2">{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => {
  const [postPromise, setPostPromise] = useState(() => fetchRandomPosts());

  const handleRefetch = () => {
    setPostPromise(fetchRandomPosts());
  };
  return (
    <>
      <div className="text-center mb-6">
        <p className="text-gray-600 mb-3">
          Showing 5 random posts from JSONPlaceholder API
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleRefetch}
        >
          🔄 Get 5 Random Posts
        </button>
      </div>
      <Suspense
        fallback={
          <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
        }
      >
        <PostItems postPromise={postPromise} />
      </Suspense>
    </>
  );
};

export { Posts as UseExample2 };
