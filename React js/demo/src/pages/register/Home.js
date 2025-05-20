import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home= () =>{
    const groupName = "Object-Oriented Programming Group Project";
    const members = [
        { name: "M.N.M.Nasmeen", role: "CS/2020/036", emai:"nasmeen-cs20036@stu.kln.ac.lk" },
        { name: "B.K.Gautham", role: "CS/2020/055", emai:"gautham-cs20055@stu.kln.ac.lk" },
        { name: "M.R.M.Faslan", role: "CS/2020/056", emai:"faslan-cs20056@stu.kln.ac.lk" },
        { name: "Y.Kanusan", role: "CS/2020/062", emai:"kanusan-cs20062@stu.kln.ac.lk" },
        { name: "P.Shakithyen", role: "CS/2020/063", emai:"shakith-cs20063@stu.kln.ac.lk" },
        { name: "S.Sanjeevan", role: "CS/2020/072", emai:"sanjeev-cs20072@stu.kln.ac.lk" },
    ];
    
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const memberRows = chunkArray(members, 3);

    return (
        <Container className="text-center my-5">
            <h1>{groupName}</h1>
            <h2>Group Members</h2>
            {memberRows.map((row, rowIndex) => (
                <Row key={rowIndex} className="my-4">
                    {row.map((member, index) => (
                        <Col md={4} key={index}>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Title>{member.role}</Card.Title>
                                    <Card.Text>{member.emai}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
            
            
        </Container>
    );
}
export default Home;