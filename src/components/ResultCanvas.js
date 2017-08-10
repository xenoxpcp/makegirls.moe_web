import React, { Component } from 'react';
import ImageEncoder from '../utils/ImageEncoder';

class ResultCanvas extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.setState({dataURL: ImageEncoder.encode(this.props.result)});
    }

    render() {
        return (
            <div className="result-canvas">
                {this.state.dataURL && <img src={this.state.dataURL} alt="result" />}
            </div>
        );
    }
}

export default ResultCanvas;
