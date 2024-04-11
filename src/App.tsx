import { LiveTvOutlined } from '@mui/icons-material';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <LiveTvOutlined sx={{ mr: 2 }} />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
