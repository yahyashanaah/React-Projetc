import './App.css';
import Header  from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex",justifyContent: "center"}}>
        {/* POST & SIDE MENU CONTAINER */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* POST CONTAINER */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* === POST CONTAINER === */}

          {/* SIDE MENU CONTAINER */}
          <div style={{ width: "30%"}}>
            <SideMenu />
          </div>
          {/* === SIDE MENU CONTAINER === */}
        </div>
        {/* POST & SIDE MENU CONTAINER */}
      </div>
    </div>
  );
}



export default App;
