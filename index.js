import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {

	render() {
		return (
			<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; ' >
						<a-assets>
					<img src="./assets/heart.jpeg" id="heart" />
					</a-assets>
					<a-marker preset='hiro'>
				
					<a-image src="#heart" width="2" height="2" position='0 0.5 0' rotation="-90 0 0 " text="value: Maby My Love; color:#000; align: center"></a-image>
        
					</a-marker>
					<a-entity camera></a-entity>
				</a-scene>
		);
	}
}



render(<App />, document.body);