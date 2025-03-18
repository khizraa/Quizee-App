import '../styles/common.css';
import { useNavigate } from 'react-router-dom';

const navlist = [
  { name: "HOME", arc: "/" },  
  { name: "ABOUT", arc: "#" },
  { name: "COURSES", arc: "#" },  
  { name: "CONTACT", arc: "#contact" }, 
];

function NavBar() {
  const navigate = useNavigate(); 

  function handleNavigation(arc) {
    if (arc.startsWith("#")) {
      
      window.location.hash = arc;
    } else {
      
      navigate(arc);
    }
  }

  return (
    <nav className="navbar cnav">
      <div className="container d-flex justify-content-between align-items-center">
       
        <a className="navbar-brand text-light fs-3" href="#">
          <img
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="QUIZEEE"
            width="30"
            height="24"
          />
        </a>

      
        <ul className="nav">
          {navlist.map((item, index) => (
            <li className="nav-item" key={index}>
              <button
                className="nav-link text-white fs-5 bg-transparent border-0"
                onClick={() => handleNavigation(item.arc)} 
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
