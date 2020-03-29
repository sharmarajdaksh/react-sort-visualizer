import React from 'react';
import './App.css';
import { ElementList } from './components/ElementList';
import { Header } from './components/Header';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class App extends React.Component {
	state = {
		elements: [
			{ key: 2, value: 25 },
			{ key: 1, value: 72 },
			{ key: 3, value: 44 },
			{ key: 4, value: 99 },
			{ key: 5, value: 12 },
			{ key: 6, value: 87 }
		]
	};

	bubbleSort = async () => {
		let elementsLength = this.state.elements.length;
		for (let i = 0; i < elementsLength; i++) {
			for (let j = 0; j < elementsLength - 1; j++) {
				if (
					this.state.elements[j].value >
					this.state.elements[j + 1].value
				) {
					let updatedElements = [...this.state.elements];
					let x = updatedElements[j];
					updatedElements[j] = updatedElements[j + 1];
					updatedElements[j + 1] = x;
					this.setState({ elements: updatedElements });
					await sleep(750);
				}
			}
		}
	};

	render() {
		return (
			<div>
				<Header />
				<div className='main'>
					<button
						className='element-list btn'
						onClick={this.bubbleSort}
					>
						Let the sorting begin
					</button>
					<ElementList elements={this.state.elements}></ElementList>
				</div>
			</div>
		);
	}
}

export default App;
