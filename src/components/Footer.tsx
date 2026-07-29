export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo">
                        <img src="img/logo.png" alt="" />
                        <span>PWR27</span>
                    </div>
                    <p>Plataforma integral para la gestión, análisis y visualización territorial.</p>
                </div>

                <div className="footer-links">
                    <h4>NAVEGACIÓN</h4>
                    <ul>
                        <li>Inicio</li>
                        <li>Módulos</li>
                        <li>Beneficios</li>
                        <li>Tecnología</li>
                        <li>Contacto</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>MÓDULOS</h4>
                    <ul>
                        <li>App Movilización</li>
                        <li>Conteo de Votos (APP)</li>
                        <li>Mapa Geoelectoral</li>
                        <li>Panel Electoral</li>
                    </ul>
                </div>

                <div className="footer-cta">
                    <h4>¿LISTO PARA COMENZAR?</h4>
                    <p>Inicia sesión y accede a todas las herramientas de PWR27.</p>
                    <span className="primary-btn">CONOCE LOS MÓDULOS →</span>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>© 2024 PWR27. Todos los derechos reservados.</p>
                    <div className="social">
                        <div className="social-icon"><img src="img/instagram.png" alt="" /></div>
                        <div className="social-icon"><img src="img/icons8-facebook-nuevo-50.png" alt="" /></div>
                        <div className="social-icon"><img src="img/icons8-twitterx-50.png" alt="" /></div>
                        <div className="social-icon"><img src="img/icons8-correo-48.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}