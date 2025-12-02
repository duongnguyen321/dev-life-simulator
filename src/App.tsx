import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './screens/MainMenu';
import GameScreen from './screens/GameScreen';
import EndingScreen from './screens/EndingScreen';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainMenu />} />
				<Route path='/game' element={<GameScreen />} />
				<Route path='/ending' element={<EndingScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
