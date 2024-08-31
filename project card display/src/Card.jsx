import React from 'react'

const Card = (props) => {
    return (
        <div className='block max-w-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{props.title}</h5>
            <p className='font-normal text-gray-700'>{props.desc}</p>
        </div>
    )
}

export default Card
