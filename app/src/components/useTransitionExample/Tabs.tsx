import { useState, useTransition } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import TabButton from "./TabButton";

// Type for tab values
type TabValue = "tab1" | "tab2" | "tab3";

export function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<TabValue>("tab1");

  const selectTab = (nextTab: TabValue) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-2">
          <TabButton
            isActive={tab === "tab1"}
            onClick={() => selectTab("tab1")}
            isPending={isPending && tab !== "tab1"}
          >
            Tab One
          </TabButton>
          <TabButton
            isActive={tab === "tab2"}
            onClick={() => selectTab("tab2")}
            isPending={isPending && tab !== "tab2"}
          >
            Tab 2 (slow)
          </TabButton>
          <TabButton
            isActive={tab === "tab3"}
            onClick={() => selectTab("tab3")}
            isPending={isPending && tab !== "tab3"}
          >
            Tab 3
          </TabButton>
        </div>

        {/* Tab Content */}
        <div
          className={`transition-opacity duration-200 ${
            isPending ? "opacity-60" : "opacity-100"
          }`}
        >
          {tab === "tab1" && <Tab1 />}
          {tab === "tab2" && <Tab2 />}
          {tab === "tab3" && <Tab3 />}
        </div>

        {/* Loading Indicator */}
        {isPending && (
          <div className="mt-4 text-center">
            <span className="inline-block animate-pulse text-blue-600 text-sm">
              Loading...
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export { Tabs as UseTransitionExample };
