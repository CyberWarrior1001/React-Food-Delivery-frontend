import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png"


function Section4() {
    return (
        <>

            <section className="promotion_section">
                <Container>
                    <Row className='align-items-center'>
                        <Col className="text-center mb-5 mb-lg-0">
                            <img src={PromotionImage} className='img-fluid' alt="Promotion" />

                        </Col>
                        <Col lg={6} className="px-5">
                            <h2>Nothing brings People togather like a good burger</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus ea rem sequi id veniam, dolores quasi necessitatibus soluta quibusdam, tempore alias quis. Provident voluptatum quis sequi nostrum assumenda consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, delectus.
                            </p>
                            <ul>
                                <li>

                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias cupiditate rem delectus itaque similique quasi obcaecati, explicabo exercitationem placeat.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur accusamus voluptatem quaerat 
                                    </p>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </section>

            {/* BG Parallax Scroll */}
            <section className="bg_parallax_scroll">
                
            </section>

        </>
    )
}

export default Section4
