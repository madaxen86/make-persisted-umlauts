import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import { reload } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Home() {
  const [text, setText] = makePersisted(createSignal(""), {
    storage: cookieStorage,
    name: "umlauts",
    serialize(data) {
      return JSON.stringify(data);
    },
    deserialize(data) {
      return JSON.parse(data);
    },
  });

  return (
    <main>
      <h1>Umlauts</h1>

      <input
        value={text()}
        onInput={(e) => setText(e.currentTarget.value)}
      />
      <button onClick={() => reload()}>Reload</button>
    </main>
  );
}
