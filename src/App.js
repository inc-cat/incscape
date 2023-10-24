import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet,
  NavLink,
  useParams,
  useNavigate,
} from 'react-router-dom';

// page components
import Home from './components/Home';
import About from './components/About';
import MarioKart8 from './components/MarioKart8';
import Archive from './components/Archive';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation bar */}
        <div class="topnav" id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://github.com/inc-cat">Code</a>
          <div class="dropdown">
            <button class="dropbtn">
              Music
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="https://anwarlouis.bandcamp.com/">Bandcamp</a>
              <a href="https://www.last.fm/user/championanwar">Last FM</a>
              <a href="https://listenbrainz.org/user/championanwar/">
                ListenBrainz
              </a>
              <Link to="/archive">Archive</Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              Cool Stuff
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/mariokart8">Mario Kart 8</a>
              <a href="/gallery">Gallery</a>
              <a href="#">Links</a>
            </div>
          </div>

          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            &#9776;
          </a>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mariokart8" element={<MarioKart8 />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
