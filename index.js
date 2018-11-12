import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {



	render() {
		return (
			
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

    <a-marker type="pattern" url="./assets/marker.patt">
   
    <a-entity 
    gltf-model={`url(./assets/produtos/pizza.glb)`} 
    
    scale="4 4 4" position='0 0 0'></a-entity>
  
    </a-marker>
    <a-camera-static />
</a-scene>
		);
	}
}




render(<App />, document.body);