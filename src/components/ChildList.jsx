import React from 'react'

export const ChildList = ({item}) => {
    return(
        <React.Fragment>
            <h3>{item.id}</h3>
            <h3>{item.title}</h3>
            <h4>{item.body}</h4>
        </React.Fragment>
    )
}
