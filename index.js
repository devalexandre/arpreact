import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {

	render() {
		return (
			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; ' >
						<a-assets>
					<video src="./assets/Sobre_os_jovens_se_manifestarem.mp4" id="video" autoplay loop="true" webkit-playinline/>
					</a-assets>
					<a-marker preset='hiro'>
				
					<a-video src="#video" ></a-video>
					</a-marker>
					<a-entity camera></a-entity>
				</a-scene>
		);
	}
}



render(<App />, document.body);