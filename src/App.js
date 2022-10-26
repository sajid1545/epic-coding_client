import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';

function App() {
	return (
		<div className="App overflow-hidden">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
