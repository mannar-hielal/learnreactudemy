import CoreConceptItem from './CoreConceptItem';
import { CORE_CONCEPTS } from "../../data-with-examples";

export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConceptItem key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    )
}