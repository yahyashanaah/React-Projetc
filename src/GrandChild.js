import UserContext from "./UserContext";
import { useContext } from "react";

function GrandChild() {
  const username = useContext(UserContext);
  return <h1>Hello, {username}!</h1>;
}

export default GrandChild;
