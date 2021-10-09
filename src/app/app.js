import { Switch, Route } from 'react-router-dom'

import { HomePage } from "pages/home-page"
import { BlogDetailPage } from "pages/blog-detail"

import './app.css';



export function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog/:blogId" component={BlogDetailPage} />
      </Switch>
     
    </div>
  );
}
