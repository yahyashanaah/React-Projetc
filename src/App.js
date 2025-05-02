import './App.css';
import Header  from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

const showCategory = true;
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "70%" }}>
            <Post postName="Yahya Shanaah" postType="Mahmoud Shanaah">
              <p>
                Yahya Shanaah is a software engineer with a passion for web
                development and a knack for problem-solving. He enjoys creating
                user-friendly applications and is always eager to learn new
                technologies.
              </p>
            </Post>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          <div style={{ width: "30%" }}>
            <AppSideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppSideMenu() {
 if(showCategory === true) {
    return <SideMenu />
  }
  else {
    return null;
  }
}

export default App;
