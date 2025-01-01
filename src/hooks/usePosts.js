import { useState, useEffect } from 'react'
import appwriteServices from '../appwrite/appwriteServices'

export function usePosts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts(){
            await appwriteServices.getPosts([])
            .then((posts) => {
                if (posts){
                    setPosts(posts.documents)
                }
            })
        }
        getPosts();
    }, [])

    return [posts, setPosts];
}