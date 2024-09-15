import ContentArea from "../ContentArea";
import TabSelector from "./TabSelector";
import TopicSelector from "./TopicSelector";

function HomeContent() {
    return (
        <main id="home-content">
            <TopicSelector />
            <TabSelector />
            <ContentArea />
        </main>
    );
}

export default HomeContent;