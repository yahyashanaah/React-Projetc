import './App.css';
import Header  from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

const showCategory = true;

const listOfPoests = [
  {
    id : 1,
    postName: "Post 1",
    postType: "This is the content of post 1",
  },
  {
    id : 2,
    postName: "Post 2",
    postType: "This is the content of post 2",
  },
  {
    id : 3,
    postName: "Post 3",
    postType: "This is the content of post 3",
  },
  {
    id : 4,
    postName: "Post 4",
    postType: "This is the content of post 4",
  },
]
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "70%" }}>
            {listOfPoests.map((post) => (
              <Post key={post.id} postName={post.postName} postType={post.postType} />
            ))}
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
