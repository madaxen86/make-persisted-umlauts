import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import { createSignal } from "solid-js";

export default function Home() {
  const [text, setText] = makePersisted(createSignal(""), {
    storage: cookieStorage,
    name: "umlauts",
  });

  return (
    <main>
      <h1>Umlauts</h1>
      <div class="container">
        <input
          value={text()}
          onInput={(e) => setText(e.currentTarget.value)}
        />
        <button onClick={() => setText("öäüÖÄÜ")}>Set umlauts öäüÖÄÜ</button>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    </main>
  );
}
