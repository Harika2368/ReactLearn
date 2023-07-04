import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        const {count,incrementCount}=this.props
        return (
            <h2 onMouseOver={incrementCount}>{this.props.name} Hover {count} times</h2>
        )
    }
}
export default HoverCounter2