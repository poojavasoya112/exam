import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Header.css'
import { Cart4 } from 'react-bootstrap-icons';

function Header() {
    return (
        <>
            <header className='shadow-lg py-2 bg-light'>
                <Container>
                    <Row className='align-items-center'>
                        <div className='col-2'>
                            <h3 className='text-black'>Logo</h3>
                        </div>
                        <div className='col-10 d-flex justify-content-end'>
                            <nav>
                                <ul className='d-flex list-unstyled m-0 align-items-center'>
                                    <li>
                                        <a href='#' className='text-black fw-semibold text-decoration-none px-3'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#' className='text-black fw-semibold text-decoration-none px-3'>About</a>
                                    </li>
                                    <li>
                                        <a href='#' className='text-black fw-semibold fs-5 text-decoration-none px-3'><Cart4 /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;