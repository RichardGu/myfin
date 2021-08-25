import * as React from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card } from 'react-bootstrap';
import summaryChart from './components/summary-chart';
import absentChart from './components/absent-chart';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Dashboard = () => {
    const event = [
        {
            title: 'Brooklyn Nets @ Milwaukee Bucks',
            start: '2021-10-19',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Golden State Warrior @Los Angeles Lakers',
            start: '2021-10-19',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Indiana Pacers @ Charlotte Hornets',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Chicago Bulls @ Detroit Pistons',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Boston Celtics @ New York Knicks',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Washington Wizards @Toronto Raptors',
            start: '2021-10-20',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Dallas Mavericks @ Atlanta Hawks',
            start: '2021-10-21',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        },
        {
            title: 'Milwaukee Bucks @Miami Heat',
            start: '2021-10-21',
            borderColor: '#04a9f5',
            backgroundColor: '#04a9f5',
            textColor: '#fff'
        }
    ];
    return (<>
            <Row>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-user-graduate f-36 text-c-purple"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="text-muted m-b-10">Most Expensive Team 2021</h6>
                                    <h2 className="m-b-0">Warrior</h2>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-users f-36 text-c-red"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="text-muted m-b-10">Highest Paid in 2022</h6>
                                    <h2 className="m-b-0">Stephen Curry</h2>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-user-tie f-36 text-c-green"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="text-muted m-b-10">Higest Market Value Team 2021</h6>
                                    <h2 className="m-b-0">Warrior</h2>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col sm="auto">
                                    <i className="fas fa-book-open f-36 text-c-blue"/>
                                </Col>
                                <Col sm="auto">
                                    <h6 className="text-muted m-b-10">Subject</h6>
                                    <h2 className="m-b-0">25</h2>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5><a href='/nba/money'>NBA Top Salary 2000-2022</a></h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...summaryChart}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={5} md={12}>
                    <Card className="task-card">
                        <Card.Header>
                            <h5>NBA Events</h5>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled task-list">
                                <li>
                                    <i className="feather icon-check f-w-600 task-icon bg-c-green"/>
                                    <p className="m-b-5">Tue, 24 Aug</p>
                                    <h6 className="text-muted">
                                        New season NBA schedule posted: <a href="https://www.nba.com/schedule">https://www.nba.com</a>
                                    </h6>
                                </li>
                                <li>
                                    <i className="task-icon bg-c-blue"/>
                                    <p className="m-b-5">Mon, 23 Aug</p>
                                    <h6 className="text-muted">
                                        NBA data analysis site launched.
                                    </h6>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={7} md={12}>
                    <Card className="overflow-hidden">
                        <Card.Body className="bg-c-blue">
                            <Chart {...absentChart}/>
                        </Card.Body>
                        <Card.Footer>
                            <h6 className="text-muted m-b-30 m-t-15">Students Today's Attendance</h6>
                            <Row className="row text-center">
                                <Col className="border-right">
                                    <h6 className="text-muted m-b-10">Total present student</h6>
                                    <h3 className="">175</h3>
                                </Col>
                                <Col>
                                    <h6 className="text-muted m-b-10">Total absent student</h6>
                                    <h3 className="">76</h3>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"><a href='https://www.nba.com/schedule?cal=October'>NBA Calendar 2021 - 2022</a></Card.Title>
                        </Card.Header>
                        <Card.Body className="calendar">
                            <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }} initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true} weekends={true} initialDate="2021-10-01" events={event} // alternatively, use the `events` setting to fetch from a feed
    />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default Dashboard;
