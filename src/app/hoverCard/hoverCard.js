import React, { memo } from 'react'
import Stumpy from '../../assets/images/Stumpy.png'
const HoverCard = ({ width, background, label, description, link }) => {
    return (
        <a 
            href={link ?? 'https://www.google.com'}
            style={{
                position: 'relative', 
                width: width, 
                height: width, 
                borderRadius: width / 10, 
                backgroundColor: 'lightgreen', 
            }}
            className='HoverCard'
        >
            <img
                src={background ?? Stumpy}
                alt='hover-card'
            />
            <div>
                <p 
                    style={{
                        fontSize: width / 7.5,
                        margin: 0,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
                    }}
                > 
                    {label ?? "Not Set"} 
                </p>
                <p 
                    style={{
                        fontSize: width / 15,
                        margin: 0,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
                    }}
                    className='HoverCardDescription'
                > 
                    {description ?? ""} 
                </p>
            </div>
        </a>
    )
}

export default memo(HoverCard)