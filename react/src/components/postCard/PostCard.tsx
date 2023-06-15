import { PostProps } from '@/types/PostProps.type';
import React from 'react';

const PostCard = ({ title, body }: PostProps) => {
	return (
		<div className=''>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default PostCard;
