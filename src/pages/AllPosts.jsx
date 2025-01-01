import React, { useEffect } from 'react';
import { usePosts } from '../hooks/usePosts';
import { Container, PostCard } from '../components';

function AllPosts() {

    const [posts, setPosts] = usePosts();
    console.log(posts);
    return posts ? (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                {
                    posts.map((post) => {
                        return <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    })
                }
                </div>
            </Container>
        </div>
    ) : null;
}

export default AllPosts;