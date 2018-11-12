import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {



	render() {
		return (
			
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>

    <a-marker type="pattern" url="./assets/marker.patt"></a-marker>
  
</a-scene>
		);
	}
}




render(<App />, document.body);