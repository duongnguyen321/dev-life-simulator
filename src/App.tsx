import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load screens to split code chunks
const MainMenu = lazy(() => import('./screens/MainMenu'));
const GameScreen = lazy(() => import('./screens/GameScreen'));
const EndingScreen = lazy(() => import('./screens/EndingScreen'));
const StoryVisualization = lazy(() => import('./screens/StoryVisualization'));

// Loading component
const Loading = () => (
	<div className='w-full h-full flex items-center justify-center bg-black text-white pixel-font'>
		Loading...
	</div>
);

function App() {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<MainMenu />} />
					<Route path='/game' element={<GameScreen />} />
					<Route path='/ending' element={<EndingScreen />} />
					<Route path='/story-map' element={<StoryVisualization />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
