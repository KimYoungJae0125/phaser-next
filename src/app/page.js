import Image from "next/image";
import styles from "./page.module.css";
import {Game} from "@/components/game";

export default function Home() {
  return (
    <main>
      <Game />
    </main>
  );
}
