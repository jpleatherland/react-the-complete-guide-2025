import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.js";
import TabButton from "./TabButton.js";

function toCapitalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const TAB_NAMES = Object.keys(EXAMPLES) as (keyof typeof EXAMPLES)[];

type TabName = typeof TAB_NAMES[number] | null;

export default function Examples() {

  const [selectedTab, setSelectedTab] = useState<TabName>(null);

  const handleClick = (selectedButton: TabName) => {
    setSelectedTab(selectedButton);
  }

  function getExampleKey(tab: TabName): keyof typeof EXAMPLES | null {
    return tab ? tab.toLowerCase() as keyof typeof EXAMPLES : null;
  }

  const exampleKey = getExampleKey(selectedTab)

  return (
    <Section id="examples" title="Examples">
      <menu>
        {Object.keys(EXAMPLES).map((x) => (
          <TabButton
            key={`menuItem${x}`}
            isSelected={selectedTab === x}
            onClick={() => handleClick(x as TabName)}
          >{toCapitalCase(x)}</TabButton>
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
    </Section >
  )
}
