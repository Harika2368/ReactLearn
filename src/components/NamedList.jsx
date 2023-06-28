import React from 'react'
import Person from './Person'

export const NamedList = () => {
    const names=['RM','Suga','Jin','Jhope','Jimin','V','JK']
    const person=[
        {
            id:1,
            name:'Bruce',
            age:29,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:28,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:26,
            skill:'Vue'
        }
    ]
    const nameList=names.map((name,index)=><h3 key={index}> {index+1} {name}</h3>)
    const personList=person.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>
            {/* <h3>{names[0]}</h3>
            <h3>{names[1]}</h3>
            <h3>{names[2]}</h3>
            <h3>{names[3]}</h3>
            <h3>{names[4]}</h3>
            <h3>{names[5]}</h3>
            <h3>{names[6]}</h3> */}
            { nameList }
            {/* {personList} */}

        </div>
    )
}
