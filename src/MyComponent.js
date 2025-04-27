import "./FirstComponentStyle.css"
export default function MyComponent() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
  };

  const elmStyle = {
    color: "blue",
    fontSize: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
  };

    return (
      <div>
        <h1 style={elmStyle}>{person.firstName} Hello, World!</h1>
        <h2 className={"yahElm"}>{person.lastName}</h2>
        <h3>{person.age}</h3>
        <h4>Hobbies:</h4>
        <ul>
          {person.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <p>This is my first React component.</p>
        <button onClick={sayHello}>Click Me!</button>
      </div>
    );
  }

function sayHello() {
  alert("Hello, World!");
}