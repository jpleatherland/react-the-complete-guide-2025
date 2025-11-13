import { useState } from "react";

import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

const TAB_NAMES = ["Components", "JSX", "Props", "State"] as const;

type TabName = typeof TAB_NAMES[number] | null;

// function getExampleKey(tab: TabName): keyof typeof EXAMPLES {
//   //function will not be called if tab is falsey
//   return tab!.toLowerCase() as keyof typeof EXAMPLES;
// }

// if you are against ! operator
// use with exampleKey
function getExampleKey(tab: TabName): keyof typeof EXAMPLES | null {
  return tab ? tab.toLowerCase() as keyof typeof EXAMPLES : null;
}

function App() {
  const [selectedTab, setSelectedTab] = useState<TabName>(null);

  const handleClick = (selectedButton: TabName) => {
    setSelectedTab(selectedButton);
  }

  const exampleKey = getExampleKey(selectedTab)

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, i) => {
              return (
                <CoreConcept
                  key={`concept${i}`}
                  {...concept}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            {TAB_NAMES.map((x) => (
              <TabButton
                key={`menuItem${x}`}
                isSelected={selectedTab === x}
                clickHandler={() => handleClick(x as TabName)}
              >{x}</TabButton>
            ))}
          </menu>
          {!exampleKey ? <p>Please select a tab</p> :
            <div id="tab-content">
              <h3>{EXAMPLES[exampleKey].title}</h3>
              <p>{EXAMPLES[exampleKey].description}</p>
              <pre>
                <code>
                  {EXAMPLES[exampleKey].code}
                </code>
              </pre>
            </div>
          }
        </section >
      </main >
    </div >
  );
}

export default App;
