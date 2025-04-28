import './App.css';
import Header  from './Header';
import Article from './Article';
function App() {

  const firstContent = `yahayahahdasjvjasd`;
  const secondContent = `ksdjfhdsmjfhkdsjfhjksd`;
  return (
    <div className="App">
      <Header />
      <Article content={firstContent} personName="yahya" email="yahya@gmail.com" bio="ALhamdullah">
        <div>
          <h1>Yahya</h1>
          <p style={{backgroundColor:"green"}}>Yahya is a software engineer with a passion for coding.</p>
          <p>He loves to learn new technologies and improve his skills.</p>
        </div>
      </Article>
      <Article personName="Amer" email = "haha@gmail.com" bio = "oaskdpmdfsnbndf" content={secondContent}>
        <div>
          <h1>Amer</h1>
          <p style={{backgroundColor:"red"}}>Amer is a software engineer with a passion for coding.</p>
          <p>He loves to learn new technologies and improve his skills.</p>
        </div>
      </Article>
      
    </div>
  );
}



export default App;
