import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

interface Post {
  id: string;
  title: string;
  body: string;
  timestamp: number;
}

// PostItem component
const PostItem = ({ post }: { post: Post }) => {
  return (
    <article className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-lg p-6 my-4 rounded-lg transition-shadow duration-200 border border-blue-200">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800 flex-1">{post.title}</h2>
        <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
          {new Date(post.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
};

// SubmitButton component - Must be used inside a form
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer focus:ring-blue-500"
      }`}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Submitting...
        </span>
      ) : (
        "📝 Submit Post"
      )}
    </button>
  );
};

// PostForm component
const PostForm = ({ addPost }: { addPost: (post: Post) => void }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    // Validate
    if (!title?.trim() || !body?.trim()) {
      alert("Please fill in both title and body");
      return;
    }

    // Simulate a network delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost: Post = {
      id: Date.now().toString(),
      title: title.trim(),
      body: body.trim(),
      timestamp: Date.now(),
    };

    addPost(newPost);
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-8 border border-gray-200"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Create New Post
        </h2>
        <p className="text-gray-600 text-sm">
          Using React 19's{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
            useFormStatus()
          </code>{" "}
          hook to show submission state
        </p>
      </div>

      <div className="mb-5">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow-sm border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          id="title"
          type="text"
          placeholder="Enter an interesting title..."
          name="title"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          className="shadow-sm border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          id="body"
          rows={5}
          placeholder="Write your post content here..."
          name="body"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <SubmitButton />
        <button
          type="reset"
          className="text-gray-600 hover:text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <PostForm addPost={addPost} />

      {posts.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Posts ({posts.length})
            </h2>
            {posts.length > 0 && (
              <button
                onClick={() => setPosts([])}
                className="text-sm text-red-600 hover:text-red-800 font-medium hover:underline cursor-pointer"
              >
                Clear All
              </button>
            )}
          </div>
          <div>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500 text-lg mb-2">No posts yet</p>
          <p className="text-gray-400 text-sm">
            Create your first post using the form above!
          </p>
        </div>
      )}
    </div>
  );
};

export { Posts as UseFormStatusExample };
