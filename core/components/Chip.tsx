import React from 'react';
import Image from 'next/image';
import { IUser } from '@/app/page';

type Props = {
	id: number;
	image: string;
	title: string;
	setUsers: React.Dispatch<React.SetStateAction<number[]>>;
	users: IUser[];
	userId: number[];
	isFocused: boolean;
};

const Chip = ({ id, image, title, setUsers, userId, isFocused }: Props) => {
	const handleRemove = () => {
		setUsers(userId.filter((i) => i !== id));
	};

	return (
		<div
			className={`flex items-center justify-between bg-zinc-200 w-full  py-1 rounded-full md:my-1 aria-checked:border aria-checked:border-blue-500`}
			aria-checked={isFocused}
		>
			<Image
				src={image}
				alt={title}
				height={24}
				width={24}
				className='rounded-full h-8 w-8 object-cover mr-2'
			/>
			<p className='text-zinc-500 text-sm'>{title}</p>
			<Image
				src={'/cross.png'}
				alt={'cross'}
				height={16}
				width={16}
				className='cursor-pointer mr-2'
				onClick={handleRemove}
			/>
		</div>
	);
};

export default Chip;
