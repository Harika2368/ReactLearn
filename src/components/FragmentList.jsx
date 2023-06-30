import React from 'react'
import { ChildList } from './ChildList'

export const FragmentList = () => {
    const arr=[
        {
            id:1,
            title:'java',
            body:'java for beginners'
        },
        {
            id:2,
            title:'C#',
            body:'learning c#'

        },
        {
            id:3,
            title:'C',
            body:'Let us C'
        }]
        const objList=arr.map(item=><ChildList key={item.id} item={item}/>)
    return (
        <React.Fragment>
            {
                objList
            }
        </React.Fragment>
    )
}

