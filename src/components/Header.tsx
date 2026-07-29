export default function Header() {
    return (
        <header className="header">
            <div className="container nav">
                <div className="logo">
                    <img src="img/logo.png" alt="PWR27 Logo" />
                    <span>PWR27</span>
                </div>

                <nav>
                    <ul>
                        <li><span>Inicio</span></li>
                        <li><span>Módulos</span></li>
                        <li><span>Beneficios</span></li>
                        <li><span>Contacto</span></li>
                    </ul>
                </nav>

                <div className="nav-right">
                    <div className="icon-static">
                        <img src="img/color.png" alt="" />
                    </div>
                    <div className="icon-static">
                        <img src="img/DN.png" alt="" />
                    </div>
                    <span className="login-btn">Iniciar sesión</span>
                </div>
            </div>
        </header>
    );
}