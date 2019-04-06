import React from 'react';
import {
    Container, Row, Col,
} from 'react-bootstrap';
import { getUrl } from 'Utils/Uri';

export default class Footer extends React.Component {
    render() {
        return (
            <Container className="mt-3 mb-3">
                <Row>
                    <Col className="text-left">
                        <p>Do you questions? <a href={getUrl('/contact')}>Contact us</a></p>
                    </Col>
                    <Col className="text-right">
                        <p>Copyright © 2019</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
