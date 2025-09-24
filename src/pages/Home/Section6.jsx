import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'


function Section6() {
    return (
        <section className="blog_section">
            <Container>
                <Row>
                    <Carousel >
                        <Carousel.Item>

                            <Carousel.Caption className='rv'>
                                <div className="user_img">
                                    <img src={User1} alt="brand-1" className="User-1" />
                                </div>
                                <p>
                                    "
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in vero cumque odio ipsam quisquam accusantium quibusdam voluptas iusto nam. Dolorem neque facilis iure dicta aliquam obcaecati repellat soluta! Aperiam!
                                    "
                                    
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>By Awais Ahmad</h5>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>

                            <Carousel.Caption className='rv'>
                                <div className="user_img">
                                    <img src={User2} alt="brand-1" className="User-1" />
                                </div>
                                <p>
                                    "
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in vero cumque odio ipsam quisquam accusantium quibusdam voluptas iusto nam. Dolorem neque facilis iure dicta aliquam obcaecati repellat soluta! Aperiam!
                                    "
                                    
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>By Awais Ahmad</h5>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>

                            <Carousel.Caption className='rv'>
                                <div className="user_img">
                                    <img src={User3} alt="brand-1" className="User-1" />
                                </div>
                                <p>
                                    "
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in vero cumque odio ipsam quisquam accusantium quibusdam voluptas iusto nam. Dolorem neque facilis iure dicta aliquam obcaecati repellat soluta! Aperiam!
                                    "
                                    
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>By Awais Ahmad</h5>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>

                            <Carousel.Caption className='rv'>
                                <div className="user_img">
                                    <img src={User4} alt="brand-1" className="User-1" />
                                </div>
                                <p>
                                    "
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero in vero cumque odio ipsam quisquam accusantium quibusdam voluptas iusto nam. Dolorem neque facilis iure dicta aliquam obcaecati repellat soluta! Aperiam!
                                    "
                                    
                                </p>
                                <div className="item_rating mb-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>By Awais Ahmad</h5>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6
