import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {


	render() {
		return (
			
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
<a-assets>
    <a-asset-item id="cake" src='./assets/produtos/cake.glb'></a-asset-item>
  </a-assets>


    <a-marker type="pattern" url="./assets/marker.patt">
	<a-entity gltf-model="url(./assets/produtos/cake.glb)" scale="4 4 4" position='0 0 0'></a-entity>
    
    </a-marker>
    <a-camera-static/>
</a-scene>
		);
	}
}




render(<App />, document.body);