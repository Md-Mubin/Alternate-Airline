import React from 'react'
import './CommonBlog.css'

const CommonBlog = ({blogName, blogInfo, addImage}) => {
    return (
        <>
            <ul className={`${addImage} mainBlog`}>
                <li className='blogName'>{blogName}</li>
                <li className='blogInfo'>{blogInfo}</li>
                <button>Read blog article</button>
            </ul>
        </>
    )
}

export default CommonBlog