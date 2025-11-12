import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import { CORE_CONCEPTS } from "./data.js";

function App() {
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
          <h2>Examples</h2>
          <menu>
            {["Components", "JSX", "Props", "State"].map((x) => (
              <TabButton key={`menuItem${x}`}>{x}</TabButton>
            ))}
          </menu>
          <p>More to come...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
