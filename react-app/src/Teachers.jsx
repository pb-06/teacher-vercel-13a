import React from "react";

export default class Teachers extends React.Component {
    state = {
        teachers: []
    }

    render() {
        return <div style={{margin: '20px'}}>
            {JSON.stringify(this.state.teachers)}
        </div>
    }

    componentDidMount() {
        // TODO - callout for teachers data
    }
}