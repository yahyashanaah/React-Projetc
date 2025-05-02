import "./TagButtonStyle.css";
export default function TagButton({firstName, lastName}) {
    return (
      <div>
        {firstName == null || firstName === "" ? (
          <h1>hahahahaha</h1>
        ) : (
          <button className="tagButton">
            Click Me {firstName} or {lastName}
          </button>
        )}
      </div>
    );
}