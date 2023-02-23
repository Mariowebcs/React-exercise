import React from 'react'

const Container = (props) => {

    return(
        <div className='container bg-white border border-red-700'>
            {props.children}
        </div>
    )
}

export default Container;