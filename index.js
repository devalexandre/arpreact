import './style';
import { h,Component,render } from 'preact';

 
class App extends Component {

    constructor(){
        super();
        this.state = {
            "products":[
                {"name":"cake","position":1},
                {"name":"pizza","position":0},
            ],
            "ativado":"cake"
        }


    }


    mudar(produto){
    
            this.setState({"ativado":produto.name})
        }
    



	render() {
		return (
			
<a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;'>

    <a-marker type="pattern" url="./assets/marker.patt">
   
    <a-entity 
    gltf-model={`url(./assets/produtos/${this.state.ativado}.glb)`} 
    
    scale="4 4 4" position='0 0 0'></a-entity>
  
    </a-marker>
  
</a-scene>
		);
	}
}




render(<App />, document.body);