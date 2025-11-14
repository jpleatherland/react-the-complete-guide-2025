import CoreConcept from "./CoreConcept.js";
import Section from "./Section.js";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
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
    </Section>
  );
}