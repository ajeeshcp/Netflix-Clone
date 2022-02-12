import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "../NavBar/Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from 'react';
import { mySearch } from "../../constants/context";

const Header = () => {

    const setSearch = useContext(mySearch);
    const history = useHistory();


    return (
        <div className="navbar pt-0">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="w-100 p-2 navbar-section">
                <Container className="nav-section">
                    <Navbar.Brand href=""><img onClick={
                        () => {
                            history.push("/");
                        }
                    } className="nav-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="shadow-none border-0" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-3">

                            <Nav.Link href="" className="mx-3"><p className="nav-item" onClick={
                                () => {
                                    history.push("/popular");
                                }
                            }>Popular</p></Nav.Link>
                            <Nav.Link href="" className="mx-3"><p className="nav-item" onClick={
                                () => {
                                    history.push("/toprated");
                                }
                            }>Top Rated</p></Nav.Link>
                            <Nav.Link href="" className="mx-3"><p className="nav-item" onClick={
                                () => {
                                    history.push("/upcoming");
                                }
                            }>Upcoming </p></Nav.Link>
                            <Nav.Link href="" className="mx-3"><p className="nav-item" onClick={
                                () => {
                                    history.push("/trending");
                                }
                            }>Trending</p></Nav.Link>

                        </Nav>
                        <Nav>

                            {
                                visibleSearch(useLocation().pathname) ? (
                                    <Nav.Link href="" className="mx-3">
                                        <div className="search-item">
                                            <i className="bi bi-search"></i>
                                            <input type="text" className="input-text" onChange={
                                                (e) => {
                                                    if (e.target.value !== " ") {
                                                        setSearch(e.target.value);
                                                    }
                                                }
                                            } />
                                            <button className="btn-search" onClick={
                                                () => {
                                                    history.push("/searching")

                                                }}>Search</button>
                                        </div>


                                    </Nav.Link>
                                ) : null
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;

const visibleSearch = (path) => {
    switch (path) {
        case "/":
            return true;
        default:
            return null;
    }
}