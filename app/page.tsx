import Image from "next/image";
import ContentCard from "./components/ContentCard";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ContentCard />
    </main>
  );
}
