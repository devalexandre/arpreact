import './style';
import { h,Component,render } from 'preact';
import bg from './assets/bg.jpg'
 
class App extends Component {


	render() {
		return (
			
			<a-scene >
						<a-assets>
					<img src={bg} id="sky" />

					</a-assets>
	
				<a-sky src="#sky"></a-sky>

				</a-scene>
		);
	}
}



render(<App />, document.body);