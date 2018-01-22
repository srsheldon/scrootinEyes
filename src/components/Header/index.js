import React from 'react'
import Link from 'gatsby-link'
import scrootinEyesLogo from '../../images/scrootinEyes_logo.svg'

const Header = () => (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/" className="navbar-brand">
                    <h1><img src={scrootinEyesLogo} width="200" height="50" alt="scrootinEyes"/></h1>
                </Link>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/page-2/" className="nav-link">Page 2</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    </div>
)

export default Header
