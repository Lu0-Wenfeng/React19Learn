const Tab3 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Tab 3 Content</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is the third tab, also loading instantly. The useTransition hook
        helps keep the UI responsive by marking state updates as non-urgent.
      </p>
      <div className="space-y-3">
        <div className="p-4 bg-white rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-800 mb-2">
            How useTransition Works
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Marks updates as "transitions" (non-urgent)</li>
            <li>Keeps the UI responsive during heavy updates</li>
            <li>Returns isPending flag to show loading states</li>
            <li>
              Allows urgent updates (like clicks) to interrupt transitions
            </li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg border border-green-200">
          <h3 className="font-semibold text-gray-800 mb-2">When to Use</h3>
          <p className="text-sm text-gray-600">
            Use useTransition when you have expensive renders that shouldn't
            block user interactions, like filtering large lists, complex
            calculations, or rendering many components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
