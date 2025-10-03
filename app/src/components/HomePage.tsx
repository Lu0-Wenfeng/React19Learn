import { Link } from "react-router-dom";

interface Example {
  title: string;
  description: string;
  path: string;
}

const examples: Example[] = [
  {
    title: "use() Hook Example 1",
    description:
      "Use the `use()` hook to fetch a random joke from the Chuck Norris API",
    path: "/use-example-1",
  },
  {
    title: "use() Hook Example 2",
    description:
      "Use the `use()` hook to fetch some posts from the JSONPlaceholder API",
    path: "/use-example-2",
  },
  {
    title: "use() Hook Example 3",
    description:
      "Use the `use()` hook to resolve a message from a promise and show it",
    path: "/use-example-3",
  },
  {
    title: "use(context) Example",
    description: "Use the `use()` hook to apply a theme context",
    path: "/use-example-context",
  },
  {
    title: "Action Example 1",
    description: "Use an action to submit a post form",
    path: "/action-example-1",
  },
  {
    title: "Action Example 2",
    description: "Use an action to add product to cart via form",
    path: "/action-example-2",
  },
  {
    title: "useFormStatus Example",
    description:
      "Use the useFormStatus hook to get status of post form submission",
    path: "/useformstatus-example",
  },
  {
    title: "useFormState Example",
    description:
      "Use the useFormState hook to show specific messages for cart items",
    path: "/useformstate-example",
  },
  {
    title: "useOptimistic Example",
    description:
      "Use the useOptimistic hook to show a message before the server responds",
    path: "/useoptimistic-example",
  },
  {
    title: "useTransition Example",
    description:
      "Use the useTransition hook to show a message before the server responds",
    path: "/usetransition-example",
  },
];

const ExampleCard = ({ title, description, path }: Example) => {
  return (
    <li className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <Link
        to={path}
        className="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Example →
      </Link>
    </li>
  );
};

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          This is a playground for React 19 and React experimental features.
          This is for learning purposes only.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Examples</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((example) => (
            <ExampleCard key={example.path} {...example} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
