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

<a-entity id="camera" look-controls cursor="rayOrigin: mouse"></a-entity>

  <a-assets>
    <img id="next" src="./assets/next.png"/>
    <img id="prev" src="./assets/next.png"/>
  </a-assets>

{
    this.state.products.map(produto =>(
        <a-image onClick={ ()=> this.mudar(produto)}  src={`./assets/produtos/${produto.name}.png`} width="1" height="1" position={`-4.5 ${produto.position} -10`} ></a-image>

    ))
}

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