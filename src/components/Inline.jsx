import React from 'react'
//
export const Inline = () => {
    const headings={
        fontSize:'40px',
        color:'blue',
        
    }
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={headings}>Inline</h1>
        </div>
    )
}
