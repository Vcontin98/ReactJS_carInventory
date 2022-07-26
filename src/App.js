import { useState } from 'react'
import PostList from './components/PostList'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Profile from './views/Profile'
import Home from './views/Home'
import Iven from './views/Iven'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/iven">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/iven" element={<Iven />} />
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}