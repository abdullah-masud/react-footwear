import React from 'react';
import { Accordion } from 'react-bootstrap';

const QuestionAndAnswers = () => {
    return (
        <div className='px-5 py-5'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>How React Works ?</h5></Accordion.Header>
                    <Accordion.Body>
                        React creates a virtaul copy of the Document Object Model in memory, which is called Virtaul DOM. They compare the DOM to the virtual DOM if there are any changes. After comparing, they determine where the changes are done and display them in the real DOM accordingly. All of this is possible with help of Diff algorithm. This improves the efficiency of the performance.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Difference between Props vs State</h5></Accordion.Header>
                    <Accordion.Body>
                        Props let you to pass data as an argument from one component to another. Props are read-only and immutable
                        so we cannot modify the props from another component.

                        The state stores the component's information, which can change over time. State changes can be asynchronous. State is mutable and can be accessed or modified inside the component.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>How useState Works ?</h5></Accordion.Header>
                    <Accordion.Body>
                        useState is a react hook that returns a stateful value as well as an update function. The setState method is used to update the state when changes have been made. After setState is defined, it receives a new state value and re-renders the components.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default QuestionAndAnswers;