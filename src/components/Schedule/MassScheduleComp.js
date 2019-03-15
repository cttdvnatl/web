import React from "react";
import './mass-schedule.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ScheduleComp = () => (

    <section className="mass_schedule">
        <Jumbotron fluid>
            <h1>Our Mass Schedule</h1>
            <div className="row">
                <dl>
                    <dt>Monday-Saturday</dt>
                    <dd>7:30 AM</dd>
                    <dd>9:30 AM</dd>
                    <dd>11:30 AM</dd>
                </dl>
                <dl>
                    <dt>Thursday-Friday</dt>
                    <dd>7:00 PM</dd>
                </dl>
                <dl>
                    <dt>Sunday </dt>
                    <dd>7:30 AM</dd>
                    <dd>2 x 9:30 AM</dd>
                    <dd>11:30 AM</dd>
                 </dl>
            </div>
        </Jumbotron>
    </section>
)

export default ScheduleComp;