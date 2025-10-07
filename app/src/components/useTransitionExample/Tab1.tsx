const Tab1 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Tab 1 Content</h2>
      <p className="text-gray-600 leading-relaxed">
        This is the first tab. It loads instantly without any delay. Notice how
        switching between tabs is smooth and responsive.
      </p>
      <div className="mt-4 p-4 bg-white rounded border border-blue-200">
        <p className="text-sm text-gray-700">
          💡 <strong>Tip:</strong> Try clicking on different tabs to see the
          useTransition hook in action.
        </p>
      </div>
    </div>
  );
};

export default Tab1;
