import React from 'react';
import { GrArticle } from "react-icons/gr";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomePostLeft = () => {
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" className='card-img' src="" />
                            <Card.Body>
                                <article>
                                    <GrArticle className='me-2'></GrArticle>
                                    Article
                                </article>
                                <Card.Title>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
                                <Card.Text>
                                    I've worked in UX for the better part of a decade. From now on, I plan to rei…
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomePostLeft;
