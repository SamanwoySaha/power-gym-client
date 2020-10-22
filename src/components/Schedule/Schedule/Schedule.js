import React from 'react';
import './Schedule.css';
import ClassDescription from '../ClassDescription/ClassDescription';
import ClassTime from '../ClassTime/ClassTime';

const Schedule = () => {
    return (
        <div>
            <h1>this is schedule</h1>
            <ClassDescription></ClassDescription>
            <ClassTime></ClassTime>
        </div>
    );
};

export default Schedule;