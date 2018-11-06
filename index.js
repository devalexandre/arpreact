import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {

	render() {
		return (
			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: true; patternRatio: 0.50' >
					<a-marker type='pattern'  patternUrl="https://raw.githubusercontent.com/devalexandre/arpreact/master/assets/indev.patt">
						<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
						</a-marker>
						<a-entity camera></a-entity>
				</a-scene>
		);
	}
}



render(<App />, document.body);