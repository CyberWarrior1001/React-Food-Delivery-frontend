import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Section7() {
  return (
    <section className="contact_section">
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center">
                <h4>We Guarantee</h4>
                <h2>30 Minutes Delivery!</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti quae quas omnis illum molestias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae!
                </p>
                <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call: 999-888-777
                </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section7
