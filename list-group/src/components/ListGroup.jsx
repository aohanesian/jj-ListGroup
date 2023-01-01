import React from 'react';

function ListGroup(props) {
    console.log(props);
    return (
        <React.Fragment>
            <ul className="list-group">
                <li className="list-group-item">
                    {props.children.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item}
                            </React.Fragment>
                        );
                    })}
                </li>
            </ul>
        </React.Fragment>
    );
}

export default ListGroup;
