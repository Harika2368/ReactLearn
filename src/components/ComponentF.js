import React, { Component } from 'react'
import { USerConsumer } from './userContext'

export class ComponentF extends Component {
    render() {
        return (
            <USerConsumer>
                {
                    // username=>{
                    //     return <div>
                    //         Hello {username}
                    //     </div>
                    // }
                    //simply
                    username=><div>
                            Hello {username}
                        </div>
                }
            </USerConsumer>
        )
    }
}

export default ComponentF
