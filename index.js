import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {

	render() {
		return (
			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; ' >
					<a-marker preset='custom' type="pattern" url='https://raw.githubusercontent.com/devalexandre/arpreact/master/assets/indev.patt'>
					<a-box position='0 0.5 0' material='color: purple;'></a-box>
					</a-marker>
					<a-entity camera></a-entity>
				</a-scene>
		);
	}
}



render(<App />, document.body);