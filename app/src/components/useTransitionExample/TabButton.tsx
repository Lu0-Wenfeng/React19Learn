import { type ReactNode } from "react";

interface TabButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  isPending?: boolean;
}

const TabButton = ({
  children,
  isActive,
  onClick,
  isPending = false,
}: TabButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-t-lg transition-all duration-200 font-medium";

  if (isActive) {
    return (
      <div
        className={`${baseStyles} text-blue-600 border-b-2 border-blue-600 bg-blue-50`}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={isPending}
      className={`${baseStyles} text-gray-600 hover:text-blue-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default TabButton;
