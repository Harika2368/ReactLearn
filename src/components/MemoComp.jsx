import React from 'react'

const MemoComp = ({name}) => {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)

//Something called higherorder component React.memo()
//accepts a component and return a new enhaced comonent
//In this case a component capable of avoideung rrenderd when there is no change in props
//similar to pure components it works with functional compoents instead