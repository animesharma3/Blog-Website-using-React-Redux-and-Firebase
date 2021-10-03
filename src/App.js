import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ArticleDetail from "./components/Articles/ArticleDetail";
import Header from "./components/Header/Header";
import Write from "./components/Write/Write";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="sticky-top">
        <Header />
      </div>
      <main
        className="container-fluid"
        style={{
          overflowY: "scroll",
          height: `${window.innerHeight}px`,
        }}
      >
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/write" exact component={Write} />
          <Route path="/article/:id" component={ArticleDetail} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
