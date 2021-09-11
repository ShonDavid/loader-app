import './App.css';
import SvgCircle from './components/SvgCircle';
import SvgGroupCircles from './components/SvgGroupCircles';
//SvgCircles numberOfSircles (we can get that from the children),
function App() {
	return (
		<div className='App'>
			<div className='svg-circle-container'>
				<SvgGroupCircles radius={130} stroke={10}>
					<SvgCircle progress={100} color='blue' />
					<SvgCircle progress={90} color='green' />
					<SvgCircle />
					<SvgCircle />
					<SvgCircle />
				</SvgGroupCircles>
			</div>
		</div>
	);
}

export default App;
