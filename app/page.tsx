'use client';
import React, { useState } from 'react';
import Chip from '@/core/components/Chip';
import UserList from '@/core/components/DropDown';

export interface IUser {
	id: number;
	image: string;
	name: string;
	email: string;
}

export interface UserListProps {
	users: IUser[];
	searchTerm: string;
	setSearchTerm: any;
	userIds: any;
	setUsers: any;
}

const users = [
	{
		id: 1,
		image: '/users.jpg',
		name: 'Alice Johnson',
		email: 'alice.johnson@example.com',
	},
	{
		id: 2,
		image: '/users.jpg',
		name: 'Bob Smith',
		email: 'bob.smith@example.com',
	},
	{
		id: 3,
		image: '/users.jpg',
		name: 'Charlie Brown',
		email: 'charlie.brown@example.com',
	},
	{
		id: 4,
		image: '/users.jpg',
		name: 'David White',
		email: 'david.white@example.com',
	},
	{
		id: 5,
		image: '/users.jpg',
		name: 'Eva Davis',
		email: 'eva.davis@example.com',
	},
	{
		id: 6,
		image: '/users.jpg',
		name: 'Frank Taylor',
		email: 'frank.taylor@example.com',
	},
	{
		id: 7,
		image: '/users.jpg',
		name: 'Grace Martinez',
		email: 'grace.martinez@example.com',
	},
	{
		id: 8,
		image: '/users.jpg',
		name: 'Harry Lewis',
		email: 'harry.lewis@example.com',
	},
	{
		id: 9,
		image: '/users.jpg',
		name: 'Ivy Wilson',
		email: 'ivy.wilson@example.com',
	},
	{
		id: 10,
		image: '/users.jpg',
		name: 'Jack Turner',
		email: 'jack.turner@example.com',
	},
	{
		id: 11,
		image: '/users.jpg',
		name: 'Katherine Harris',
		email: 'katherine.harris@example.com',
	},
	{
		id: 12,
		image: '/users.jpg',
		name: 'Liam Brown',
		email: 'liam.brown@example.com',
	},
	{
		id: 13,
		image: '/users.jpg',
		name: 'Mia Davis',
		email: 'mia.davis@example.com',
	},
	{
		id: 14,
		image: '/users.jpg',
		name: 'Noah Smith',
		email: 'noah.smith@example.com',
	},
	{
		id: 15,
		image: '/users.jpg',
		name: 'Olivia White',
		email: 'olivia.white@example.com',
	},
	{
		id: 16,
		image: '/users.jpg',
		name: 'Peter Johnson',
		email: 'peter.johnson@example.com',
	},
	{
		id: 17,
		image: '/users.jpg',
		name: 'Quinn Taylor',
		email: 'quinn.taylor@example.com',
	},
	{
		id: 18,
		image: '/users.jpg',
		name: 'Ryan Davis',
		email: 'ryan.davis@example.com',
	},
	{
		id: 19,
		image: '/users.jpg',
		name: 'Sofia Harris',
		email: 'sofia.harris@example.com',
	},
	{
		id: 20,
		image: '/users.jpg',
		name: 'Tyler Smith',
		email: 'tyler.smith@example.com',
	},
	{
		id: 21,
		image: '/users.jpg',
		name: 'Uma Turner',
		email: 'uma.turner@example.com',
	},
	{
		id: 22,
		image: '/users.jpg',
		name: 'Victor Wilson',
		email: 'victor.wilson@example.com',
	},
	{
		id: 23,
		image: '/users.jpg',
		name: 'Wendy Martinez',
		email: 'wendy.martinez@example.com',
	},
	{
		id: 24,
		image: '/users.jpg',
		name: 'Xander Brown',
		email: 'xander.brown@example.com',
	},
	{
		id: 25,
		image: '/users.jpg',
		name: 'Yara Davis',
		email: 'yara.davis@example.com',
	},
];

export default function Home() {
	const [searchedTerm, setSearchedTerm] = useState('');
	const [userId, setUsersId] = useState<number[]>([]);
	const [isFocusedId, setFocusedId] = useState<null | number>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchedTerm(e.target.value);
	};

	const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode !== 8) return;
		if (userId.length < 0 && searchedTerm.length !== 0) return;
		if (!isFocusedId) {
			setFocusedId(userId[userId.length - 1]);
			return;
		}
		userId.pop();
		setUsersId([...userId]);
		setFocusedId(null);
		return;
	};

	return (
		<div className='h-full w-full flex flex-col items-center justify-center'>
			<h1 className='mt-10 text-3xl font-bold text-blue-400'>Pick Users</h1>
			<div className='border-blue-600 border-b-2 w-3/4 flex justify-start items-center my-16 relative'>
				<div className='flex flex-wrap gap-4'>
					{users
						.filter((user: IUser) => userId.includes(user.id))
						.map((chip: IUser) => (
							<div className='w-48' key={chip.id}>
								<Chip
									id={chip.id}
									image={chip.image}
									title={chip.name}
									setUsers={setUsersId}
									userId={userId}
									users={users}
									isFocused={isFocusedId === chip.id}
								/>
							</div>
						))}
					<div className='group'>
						<input
							type='text'
							placeholder='Add new user...'
							className=' p-2 h-full focus:ring-transparent focus:outline-none w-full'
							value={searchedTerm}
							onChange={handleChange}
							onKeyDown={handleBackspace}
						/>
						<div className='group-focus-within:block hidden'>
							<UserList
								users={users}
								setUsers={setUsersId}
								userIds={userId}
								searchTerm={searchedTerm}
								setSearchTerm={setSearchedTerm}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
