'use client';

import React from 'react';
import Image from 'next/image';
import { IUser, UserListProps } from '@/app/page';

const UserList: React.FC<UserListProps> = ({
	users,
	searchTerm,
	setSearchTerm,
	setUsers,
	userIds,
}) => {
	const searchedUserList = users
		.filter((user) => {
			if (!userIds?.includes(user.id)) return true;
			return false;
		})
		.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleClick = (user: IUser) => {
		setSearchTerm('');
		setUsers((prevState: any) => [...prevState, user.id]);
	};

	return (
		<div className='z-10 absolute mt-2  h-80 overflow-scroll bg-white divide-y divide-gray-100 rounded-lg shadow min-w-64'>
			<ul className='py-2 text-sm text-gray-700'>
				{searchedUserList.length > 0 ? (
					searchedUserList.map((user) => (
						<li
							key={user.id}
							onClick={() => handleClick(user)}
							className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'
						>
							<button
								className='flex items-center justify-between w-full  gap-3'
								role='button'
								tabIndex={user.id}
							>
								<div className='flex flex-col md:flex-row md:justify-start justify-center w-full items-center gap-x-3'>
									<Image
										src={user.image}
										alt={user.name}
										height={24}
										width={24}
										className='w-12 h-12 min-w-10 min-h-10 rounded-full mr-2 object-cover'
									/>
									<p className='font-bold text-sm whitespace-nowrap'>{user.name}</p>
									<p className='text-sm text-ellipsis overflow-hidden'>{user.email}</p>
								</div>
							</button>
						</li>
					))
				) : (
					<li className='px-4 py-2 text-sm text-gray-500'>No matching users</li>
				)}
			</ul>
		</div>
	);
};

export default UserList;
