import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Example from "./components/Example/Example";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcept />
        <Example />
      </main>
    </>
  );
}
