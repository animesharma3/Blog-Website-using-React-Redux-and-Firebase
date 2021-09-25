import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import Playlists from "./components/Playlists/Playlists";
import PlaylistContent from "./components/Playlists/PlaylistContent.js/PlaylistContent";

function App() {
  return (
    <Router>
      <div className="sticky-top">
        <Header />
        <HomeScreen />
      </div>
      <main
        className="container-fluid"
        style={{ overflowY: "scroll", height: `${window.innerHeight - 184}px` }}
      >
        <Switch>
          <Route path="/" exact component={Playlists} />
          <Route path="/playlists" exact component={Playlists} />
          <Route path="/playlists/:id" component={PlaylistContent} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
