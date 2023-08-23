import Link from 'next/link'
import React from "react";

interface Post {
    id: string;
    slug: string;
    title: string;
}

interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default PostList;