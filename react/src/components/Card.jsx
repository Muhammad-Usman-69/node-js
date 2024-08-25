import React from 'react'

const Card = (props) => {
    return (
        <div style={{ border: "2px solid black" }}>
            <img
                src="https://ioflood.com/blog/wp-content/uploads/2023/10/java_logo_dice_random-300x300.jpg.webp"
                style={{ width: "300px" }}
            />
            <p style={{ textAlign: "center", fontWeight: 600 }}>{props.title}</p>
        </div>
    )
}

export default Card
