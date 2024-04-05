import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  function handleClick(selectedButton) {
    console.log("----",selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/*             <CoreConcept
              title="Components"
              description="The Core UI for building blocks"
              image={componentsImg}
            ></CoreConcept> */}
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleClick("components")}>Components</TabButton>
            <TabButton onSelect={()=> handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={()=> handleClick("props")}>Props</TabButton>
            <TabButton onSelect={()=> handleClick("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
