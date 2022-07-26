import { useState } from 'react'
import Post from './PostHome'

export default function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 0,
            Name: "Agent Smith",
            text: "Car Test"

        },
        {
            id: 1,
            Name: "Agent Samson",
            text: "Car 2 Test"
        },
        {
            id: 2,
            Name: "Agent Marley",
            text: "Car 3 test"
        }
    ])

    return (
        <>
            { 
                posts.map(post => <Post post={post} key={ post.id } />)
            }
        </>
    )
}