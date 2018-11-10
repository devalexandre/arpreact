import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {


	render() {
		return (
			
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
    <a-marker type="pattern" url="./assets/marker.patt">
      <a-box position='0 0 0' material='opacity: 0.5; side:double; color:green;'></a-box>
    </a-marker>
    <a-camera-static/>
</a-scene>
		);
	}
}




render(<App />, document.body);