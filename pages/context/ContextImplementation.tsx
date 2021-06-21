import React, { Component } from 'react';
import InkwellContext from './InkwellContext';





class ContextImplementation extends Component {

    state = {
        title: 'Welcome to the Anime Page',
        signature: 'Rakeem G.'
    }
    render() {
        const { children } = this.props;
        return (
            <InkwellContext.Provider value={this.state}> {children}</InkwellContext.Provider >
        )
    }
}

export default ContextImplementation