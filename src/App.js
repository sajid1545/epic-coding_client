import { RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { router } from './Routes/routes';
import { ReactComponent as MySVG } from './logo.svg';

function App() {
	return (
		<div className="App overflow-hidden">
			<ScrollToTop smooth component={<MySVG />} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
