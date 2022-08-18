import React from 'react'

export default function Loading(props) {
    return (
        <div style={{ height: window.innerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/Loading_2.gif' alt='loading' />
        </div>
    )
}
