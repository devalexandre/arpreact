import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {


	render() {
		return (
			
			<a-scene embedded arjs='sourceType: webcam;'>
  	<a-marker type="pattern" patternUrl='./assets/marker.patt'>
            <a-box position='0 0.5 0' material='color: black;'></a-box>
  	</a-marker>
  	<a-entity camera></a-entity>
    </a-scene>
		);
	}
}




render(<App />, document.body);