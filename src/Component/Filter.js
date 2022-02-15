import React from 'react';

const Filter = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-3" type="search" placeholder="Rechercher..." />
                            <button className="btn btn-success" type="submit">Rechercher</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Filter;