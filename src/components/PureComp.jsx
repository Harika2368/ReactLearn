import React, { Component, PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('Pure Comp Render')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

//A Pure Component on the other hand implements shouldComponentUpdate with a shallow props and  state comparion