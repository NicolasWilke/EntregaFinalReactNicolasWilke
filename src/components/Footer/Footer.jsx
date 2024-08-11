import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

const Footer = () => {
    return (

<>        <Navbar className="footer">
            <Container>
                <Navbar.Brand>
                    <img
                    src="https://vigilwineclub.com/images/link_column_image/42?dpr=1&fit=crop&h=150&q=80&version=30e0d&w=300"
                    className="imgLogo"
                />
                </Navbar.Brand>
                <Navbar>
                    <img
                    src="https://vigilwineclub.com/images/link_column_image/35?dpr=1&fit=crop&h=150&q=80&version=c2411&w=300"
                    className="imgWine"/>
                </Navbar>
                <Navbar >
                    <img
                    src="https://vigilwineclub.com/images/link_column_image/38?dpr=1&fit=crop&h=150&q=80&version=f5cac&w=300"
                    className="imgWine"/>
                </Navbar>

                    
            </Container>
        </Navbar>
        <p>E-commerce realizado por Nicolás Wilke. Todos los derechos reservados. 2024.</p>
        </>
    )
}

export default Footer