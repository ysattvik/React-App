import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Bruce', 'Clark', 'Diana','Bruce']
    // const nameList=name.map(p => <h2>{p}</h2>)
    // const nameList=name.map(name =><h2>{name}</h2>)//  we can also used another variable other than array name

        const persons=[
            {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
            },
            {
                id:2,
                name:'Bruce',
                age:30,
                skill:'Angular'
            },
            {
                    id:3,
                    name:'Adams',
                    age:30,
                    skill:'React'
            },
            {
                        id:4,
                        name:'Diana',
                        age:30,
                        skill:'Vue'
            }  
        ]                                           //key is used for uniqueness of data
        // const personList=persons.map(person =><Person key={person.id} person={person}></Person>)
        const nameList=names.map((name, index) => <h2 key ={index}>{index}{name}</h2>)

        return (
         //     {} is used to write array code inside return
        //  <div>     
        //     {
        //     nameList
        //     }
        // </div>
        // <div>{personList}</div>
        <div>{nameList}</div>
    )
}

export default NameList
