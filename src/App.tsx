import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './screens/MainMenu';
import GameScreen from './screens/GameScreen';

function App() {
	return (
		<Router>
			<div className='w-full h-full bg-bg-primary'>
				<Routes>
					<Route path='/' element={<MainMenu />} />
					<Route path='/game' element={<GameScreen />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
