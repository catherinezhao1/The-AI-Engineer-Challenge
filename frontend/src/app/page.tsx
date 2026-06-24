import MatrixRain from "@/components/MatrixRain";
import TerminalChat from "@/components/TerminalChat";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MatrixRain />
      <div className={styles.content}>
        <p className={styles.tagline}>WAKE UP, NEO...</p>
        <TerminalChat />
        <p className={styles.footer}>
          Powered by OpenAI · FastAPI · Next.js · Deploy on Vercel
        </p>
      </div>
    </main>
  );
}
