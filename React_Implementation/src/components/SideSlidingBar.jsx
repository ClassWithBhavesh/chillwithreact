import {useState} from 'react'
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { FaCaretRight } from "react-icons/fa";

const SideSlidingBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    let navIconCSS = {
      transform: "rotate(180deg)",
      transition: "transform 0.5s ease-in-out"
    }
  
    return (
      <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
        <Sidebar collapsed={collapsed}>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ padding: 10 }}>
          <div>
            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
              <FaCaretRight />
            </button>
          </div>
        </main>
      </div>
    );
  }


  export default SideSlidingBar;