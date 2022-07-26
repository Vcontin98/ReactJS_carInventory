import { useState } from 'react'
import Post from './Post'

export default function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 0,
            title: "Car 1",
            text: "Car Test"
        },
        {
            id: 1,
            title: "Car 2",
            text: "Car 2 Test"
        },
        {
            id: 2,
            title: "Car 3",
            text: "Car 3 test"
        }
    ])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                posts.map(post => <Post post={post} key={ post.id } />)
            }
        </>
    )
}