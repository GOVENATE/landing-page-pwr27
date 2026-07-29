export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <span className="badge">PLATAFORMA INTEGRAL DE GOBERNANZA TERRITORIAL</span>
                    <h1>PWR27</h1>
                    <h2>Una plataforma completa para la gestión, análisis y visualización territorial.</h2>
                    <p>PWR27 integra módulos especializados que permiten tomar decisiones informadas, optimizar procesos y fortalecer la gobernanza territorial.</p>
                    <span className="primary-btn">CONOCE LOS MÓDULOS →</span>

                    <div className="hero-stats">
                        <div className="stat">
                            <strong>8</strong>
                            <span>Módulos Integrados<br />Plataforma completa</span>
                        </div>
                        <div className="stat">
                            <strong>12</strong>
                            <span>Proyectos recientes<br />Últimos 30 días</span>
                        </div>
                        <div className="stat">
                            <strong>24</strong>
                            <span>Diagramas activos<br />Territorios mapeados</span>
                        </div>
                        <div className="stat">
                            <strong>3.2k</strong>
                            <span>Eventos registrados</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="img/Mk.png" alt="Mockup" />
                </div>
            </div>
        </section>
    );
}