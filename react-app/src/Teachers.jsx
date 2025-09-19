import React from "react";

export default class Teachers extends React.Component {
    state = {
        teachers: []
    }

    render() {
        return <div style={{ margin: '20px' }}>
            <ol>
                {this.state.teachers.map((teacher, idx) => <li key={idx}>
                    <b>Name: </b>{teacher.name}; <b>Class: </b>{teacher.hisClass}
                    {teacher.favorite && <span>; Our favorite teacher!</span>}
                </li>)}
            </ol>
        </div>
    }

    componentDidMount() {
        // callout for teachers data
        fetch('http://localhost:3333/teachers')
            .then(data => data.json())
            .then(data => {
                console.log('got data: ', data);
                this.setState({ teachers: data });
            })
            .catch(console.warn)
            .finally(() => {
                console.log('fetch done');
            })
    }
}