import React, { useState } from 'react';
import { Container, Row, Col, CardImg, Progress } from 'reactstrap';
import Me from './mon.jpg'

export default () => {
    return (
        <div>
            <p>hello</p>
        </div>
    )
}

const Name = (props) => {
    const [Test, setTest] = useState("hello pound")
    return (
        <Container>
            <Row>
                <Col xs="2" >
                    <CardImg top width={50} src={Me} alt="Card image cap" />
                    {/* <img src="./mon.jpg"/> */}
                </Col>

                <Col xs="10" >
                    <Row>
                        <h1>{Test}</h1>
                    </Row>
                    <Row>
                        <p>ประวัติ</p>
                        {/* <hr/> */}
                    </Row>
                    <Row>
                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>ชื่อ-นามสกุล</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: ณภัทร ปิยะวงศ์</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>อายุ</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: 22</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>เกณท์ทหาร</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: รด.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>เพศ</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: ชาย</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>สถานะภาพ</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: โสด</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>สัญชาติ</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: ไทย</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4" >
                            <Row>
                                <Col xs="6" >
                                    <p>วันเกิด</p>
                                </Col>
                                <Col xs="6" >
                                    <p>: 8 มิถุนายน 2541</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs="4" >
                            {/* <Row>
                        <Col xs="6" >
                            <p>อายุ</p>
                        </Col>
                        <Col xs="6" >
                            <p>: 22</p>
                        </Col>
                    </Row> */}
                        </Col>

                        <Col xs="4" >
                            {/* <Row>
                        <Col xs="6" >
                            <p>เกณท์ทหาร</p>
                        </Col>
                        <Col xs="6" >
                            <p>: รด.</p>
                        </Col>
                    </Row> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <p>name</p>
            <input type="text" onChange={e => setTest(e.target.value)} placeholder={"write something"} />
        </Container>
    )
}

const Des2 = () => {
    return (
        <div>
            <div className="text-center">0%</div>
            <Progress />
            <div className="text-center">25%</div>
            <Progress value="25" />
            <div className="text-center">50%</div>
            <Progress value={50} />
            <div className="text-center">75%</div>
            <Progress value={75} />
            <div className="text-center">100%</div>
            <Progress value="100" />
            <div className="text-center">Multiple bars</div>
            <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="30" />
                <Progress bar color="info" value="25" />
                <Progress bar color="warning" value="20" />
                <Progress bar color="danger" value="5" />
            </Progress>
        </div>
    )
}

const Des3 = () => {
    return (
        <div>
            <p>hello3</p>
        </div>
    )
}

export { Name, Des2, Des3 }

