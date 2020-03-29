import React, { useState, useEffect } from 'react';
import './App.css';
import { ElementList } from './components/ElementList';

const App = () => {
	// const [id, setId] = useState(4);
	// const idGenerators = () => {
	// 	setId(id + 1);
	// 	console.log(id);
	// 	return id - 1;
	// };

	const [elements, setElements] = useState([
		{ key: 2, value: 25 },
		{ key: 1, value: 72 },
		{ key: 3, value: 44 },
		{ key: 4, value: 99 },
		{ key: 5, value: 12 },
		{ key: 6, value: 87 }
	]);

	const bubbleSort = () => {
		let elementsLength = elements.length;
		for (let i = 0; i < elementsLength; i++) {
			for (let j = 0; j < elementsLength - 1; j++) {
				if (elements[j].value > elements[j + 1].value) {
					let updatedElements = [...elements];
					let x = updatedElements[j];
					updatedElements[j] = updatedElements[j + 1];
					updatedElements[j + 1] = x;
					setElements(updatedElements);
				}
			}
		}
	};

	useEffect(() => {
		console.log('element');
	}, [elements]);

	let sort = bubbleSort;

	return (
		<div>
			<header>HELLOOOOO</header>
			<div className='main'>
				<button onClick={sort}>Let the sorting begin</button>
				<ElementList elements={elements}></ElementList>
			</div>
		</div>
	);
};

export default App;
