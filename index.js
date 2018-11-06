import './style';
import { h,Component,render } from 'preact';
import heart from './assets/heart.jpeg'
 
class App extends Component {

	 play() {
		const vid = document.getElementById('video');

		vid.play();
	
	}
	render() {
		return (
			

			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; ' >
						<a-assets>
					<img src={heart} id="heart" />
					<video src="./assets/Sobre_os_jovens_se_manifestarem.mp4" id="video"  loop="true" webkit-playinline/>
					
					</a-assets>
		

					<a-marker preset='hiro'>
				<a-video src="#video" width="2" height="2" position='0 0.5 0' onClick={() => this.play()}></a-video>

					</a-marker>
					<a-entity camera>
						<a-cursor color="#ff0000"></a-cursor>
					</a-entity>
				</a-scene>
		);
	}
}



render(<App />, document.body);