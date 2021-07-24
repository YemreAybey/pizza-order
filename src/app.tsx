import React from 'react';
import { ToastContainer } from 'react-toastify';

type AppProps = {
	[k: string]: unknown;
};

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<ToastContainer autoClose={3000} />
		</div>
	);
};

export default App;
