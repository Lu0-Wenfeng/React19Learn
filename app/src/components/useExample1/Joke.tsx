import { Suspense, use, useState } from "react";

const fetchData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  return res.json();
};

const JokeItem = ({ jokePromise }: { jokePromise: Promise<any> }) => {
  const joke = use(jokePromise);
  return (
    <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{joke.value}</h2>
    </div>
  );
};

const Joke = () => {
  const [jokePromise, setJokePromise] = useState(() => fetchData());

  const handleRefetch = () => {
    setJokePromise(fetchData());
  };

  return (
    <>
      <title>Chuck Norris Jokes</title>
      <meta name="description" content="Chuck Norris jokes" />
      <meta name="keywords" content="chuck norris, jokes" />

      <Suspense
        fallback={
          <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
        }
      >
        <JokeItem jokePromise={jokePromise} />
      </Suspense>

      <div className="text-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleRefetch}
        >
          Get Another Joke
        </button>
      </div>
    </>
  );
};
export { Joke as UseExample1 };
