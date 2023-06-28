import React from 'react'
import './myStyles.css'

export const StyleSheet = (props) => {
    let className=props.primary?'primary':''
    return (
        <div>
            <h2 className={`${className} font-xl`}>StyleSheets</h2>
        </div>
    )
}
