// Child.js
import GrandChild from "./GrandChild";

function Child({ username }) {
  return <GrandChild username={username} />;
}

export default Child;
