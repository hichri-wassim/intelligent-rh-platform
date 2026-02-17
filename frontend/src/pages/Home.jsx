import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Plateforme Intelligente de Recrutement</h1>
          <p className="hero-sub">
            Rejoignez Attijari Bank et construisez votre carrière dans un environnement innovant
          </p>

          <a className="hero-cta" href="#offres">Voir les offres</a>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Une Plateforme de Recrutement Innovante</h2>
          <p className="section-sub">
            Nous utilisons les dernières technologies pour optimiser le processus de recrutement
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>IA Avancée</h3>
              <p>Tri automatique et intelligent des candidatures grâce à l'intelligence artificielle</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Analyse Automatisée</h3>
              <p>Évaluation automatique des compétences et de l'adéquation au poste</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Eye Tracking</h3>
              <p>Analyse comportementale innovante pour évaluer l'engagement et la concentration</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Assistance Décision</h3>
              <p>Tableaux de bord et insights pour aider les RH dans leurs décisions</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="offres" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Postes Disponibles</h2>
          <p className="section-sub">Découvrez nos opportunités de carrière</p>

          <div className="filters">
            <input className="search" placeholder="Rechercher un poste..." />
            <select className="select">
              <option>Toutes les villes</option>
              <option>Casablanca</option>
              <option>Rabat</option>
            </select>
            <select className="select">
              <option>Tous les départements</option>
              <option>IT</option>
              <option>Finance</option>
            </select>
          </div>

          <p className="found">6 postes trouvés</p>

          <div className="jobs-grid">
            <div className="job-card">
              <div className="job-top">
                <h3>Chargé(e) de Clientèle Entreprises</h3>
                <span className="badge">21j restants</span>
              </div>
              <p className="job-dept">Banque des Entreprises</p>
              <div className="job-meta">
                <span>📍 Casablanca</span>
                <span>🧾 CDI</span>
                <span>📅 10/02/2026</span>
              </div>
              <p className="job-desc">Nous recherchons un(e) Chargé(e) de Clientèle Entreprises dynamique...</p>
              <button className="job-btn">Voir les détails →</button>
            </div>

            <div className="job-card">
              <div className="job-top">
                <h3>Analyste Risques Crédit</h3>
                <span className="badge">19j restants</span>
              </div>
              <p className="job-dept">Gestion des Risques</p>
              <div className="job-meta">
                <span>📍 Rabat</span>
                <span>🧾 CDI</span>
                <span>📅 08/02/2026</span>
              </div>
              <p className="job-desc">Rejoignez notre équipe de Gestion des Risques en tant qu'Analyste Crédit...</p>
              <button className="job-btn">Voir les détails →</button>
            </div>

            <div className="job-card">
              <div className="job-top">
                <h3>Développeur Full Stack</h3>
                <span className="badge">26j restants</span>
              </div>
              <p className="job-dept">Département IT</p>
              <div className="job-meta">
                <span>📍 Casablanca</span>
                <span>🧾 CDI</span>
                <span>📅 12/02/2026</span>
              </div>
              <p className="job-desc">Nous recherchons un Développeur Full Stack passionné pour contribuer...</p>
              <button className="job-btn">Voir les détails →</button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="cta-wrap">
        <div className="cta">
          <h2>Prêt à rejoindre notre équipe ?</h2>
          <p>Consultez nos offres ci-dessus et postulez à celles qui correspondent à votre profil</p>
        </div>
      </section>

      
      <footer className="footer">
        <div className="footer-inner">
          <h3>Attijari Bank</h3>
          <p>© 2026 Attijari Bank. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
