import { memo } from "react";

interface PostProps {
  index: number;
}

// Slow component that simulates heavy rendering
const Post = memo(({ index }: PostProps) => {
  const startTime = performance.now();
  // Artificial delay to simulate slow rendering (1ms per item)
  while (performance.now() - startTime < 1) {
    // Do nothing - just burning CPU cycles
  }

  return (
    <li className="p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Post {index + 1}</h3>
          <p className="text-sm text-gray-500">
            Sample content for post #{index + 1}
          </p>
        </div>
      </div>
    </li>
  );
});

Post.displayName = "Post";

const Tab2 = memo(function Tab2() {
  const items = Array.from({ length: 500 }, (_, i) => (
    <Post key={i} index={i} />
  ));

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Tab 2 - Slow Content
        </h2>
        <p className="text-gray-600 mb-4">
          This tab contains 500 items with artificial rendering delay (1ms each
          = ~500ms total). Thanks to{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            useTransition
          </code>
          , the UI remains responsive while this heavy content loads.
        </p>
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ <strong>Note:</strong> Without{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              useTransition
            </code>
            , clicking this tab would freeze the entire UI!
          </p>
        </div>
      </div>
      <ul className="space-y-2 max-h-96 overflow-y-auto pr-2">{items}</ul>
    </div>
  );
});

Tab2.displayName = "Tab2";

export default Tab2;
