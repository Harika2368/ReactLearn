import React from 'react'

//Conditionally rendering
export const UserGreetings = () => {
    const isLoggedIn =true
    return (
        <div>
            <h1>Welcome {isLoggedIn&&'CGG'}</h1>

        </div>
    )
}

{/* <h1>Welcome {isLoggedIn?'CGG':'Guest'}</h1>
*/}