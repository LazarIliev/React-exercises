import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // buttonsContainer="menu"
        // ButtonsContainer="menu"
        buttons={
          <>
            {/* <TabButton>Components</TabButton> "Components" in this example is so called children prop for TabButton */}
            <TabButton
              label="Components"
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            />
            {/* <TabButton label="JSX" onSelect={handleSelect} /> */}
            <TabButton
              label="JSX"
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              label="Props"
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              label="State"
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            />
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu></menu>
      {/* {selectedTopic} */}
      {/* {selectedTopic === undefined ? <p>Please select a topic.</p> : null} */}

      {/* {selectedTopic === undefined && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </Section>
  );
}
