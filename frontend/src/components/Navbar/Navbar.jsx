import "./Navbar.css";
import logo from "../../assets/logo.png"; 

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <img className="brand-logo" src={logo} alt="Attijari Bank" />
          <div className="brand-text">
            <div className="brand-title">Attijari Bank</div>
            <div className="brand-sub">Recruitement</div>
          </div>
        </div>

        
        <div className="actions">
          <button className="btn-outline">Espace Candidat</button>
          <button className="btn-solid">Espace RH</button>
        </div>
      </div>
    </header>
  );
}
