import './App.css';
// import "datatables.net-dt/js/dataTables.dataTables";
import 'jquery/dist/jquery.min.js';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Limelight from './containers/Limelight';
import Event from './containers/Events/Event';
import EventDetail from './containers/Events/EventDetail';

import NotFound from './components/NotFound';

import Layout from './HOC/Layout';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path = "" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/events" element = {<Event />} />
        <Route path = "/events/:slug" element = {<EventDetail />} />
        <Route path = "/limelight" element = {<Limelight />} />
        <Route element = {<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;

