import React from 'react';
import Layout from '../components/layout/Layout';
import RegisterUser from '../components/user/RegisterUser';
import UserList from '../components/user/UserList';

function UserPage() {
	return (
		<Layout
			children={
				<>
					<RegisterUser onSubmit={() => {}} />
					<UserList />
				</>
			}
		/>
	);
}

export default UserPage;
