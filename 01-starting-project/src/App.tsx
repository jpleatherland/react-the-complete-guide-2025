import { useState } from "react";

import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

const TAB_NAMES = ["Components", "JSX", "Props", "State"] as const;

type TabName = typeof TAB_NAMES[number];

function getExampleKey(tab: TabName): keyof typeof EXAMPLES {
  return tab.toLowerCase() as keyof typeof EXAMPLES;
}

function App() {
  const [selectedTab, setSelectedTab] = useState<TabName>("Components");

  const handleClick = (selectedButton: TabName) => {
    setSelectedTab(selectedButton);
  }

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
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            {TAB_NAMES.map((x) => (
              <TabButton key={`menuItem${x}`} clickHandler={() => handleClick(x as TabName)}>{x}</TabButton>
            ))}
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[getExampleKey(selectedTab)].title}</h3>
            <p>{EXAMPLES[getExampleKey(selectedTab)].description}</p>
            <pre>
              <code>
                {EXAMPLES[getExampleKey(selectedTab)].code}
              </code>
            </pre>
          </div>
        </section >
      </main >
    </div >
  );
}

export default App;
