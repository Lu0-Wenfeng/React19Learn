import { createContext, use, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create a context object with proper typing
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedCard = () => {
  // Access the theme context using the use() hook
  const context = use(ThemeContext);

  if (!context) {
    throw new Error("ThemedCard must be used within ThemeProvider");
  }

  const { theme, toggleTheme } = context;
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-2xl mx-auto shadow-lg rounded-xl p-8 transition-all duration-300 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Header with icon */}
      <div className="flex items-center justify-between mb-6">
        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {isDark ? "🌙" : "☀️"} Theme Demo
        </h1>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
          }`}
        >
          {theme} mode
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <p
          className={`text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          This card demonstrates the{" "}
          <code
            className={`px-2 py-1 rounded font-mono text-sm ${
              isDark
                ? "bg-gray-700 text-green-400"
                : "bg-gray-100 text-blue-600"
            }`}
          >
            use()
          </code>{" "}
          hook with React Context. The theme is shared across components using
          context, and you can toggle between light and dark modes.
        </p>

        <div
          className={`p-4 rounded-lg border-l-4 ${
            isDark
              ? "bg-gray-700 border-blue-400 text-gray-300"
              : "bg-blue-50 border-blue-500 text-gray-700"
          }`}
        >
          <p className="font-semibold mb-1">💡 Key Feature:</p>
          <p className="text-sm">
            The <code className="font-mono">use()</code> hook allows you to read
            context values in a more flexible way than{" "}
            <code className="font-mono">useContext()</code>, including inside
            conditionals and loops.
          </p>
        </div>
      </div>

      {/* Toggle button with better styling */}
      <button
        onClick={toggleTheme}
        className={`cursor-pointer w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]  ${
          isDark
            ? "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
            : "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500"
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          {isDark ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </span>
      </button>
    </div>
  );
};

const Theme = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-8">
      <ThemeProvider>
        <ThemedCard />
      </ThemeProvider>
    </div>
  );
};

export { Theme as UseExampleContext };
