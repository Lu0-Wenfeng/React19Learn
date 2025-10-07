import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-blue-700 text-white p-3 mb-5">
      <div className="max-w-4xl mx-auto relative">
        {!isHomePage && (
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 active:bg-blue-800 px-3 py-1 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 flex items-center gap-2"
            aria-label="Back to home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
        )}
        <h1 className="text-2xl text-center font-bold uppercase">
          React 19 Playground
        </h1>
      </div>
    </header>
  );
};
export default Header;
