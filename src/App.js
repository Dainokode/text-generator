import React, { useEffect, useState } from 'react';
import './styles/main.scss';

const App = () => {
	const [paragraphs, setParagraphs] = useState([]);
	const [inputValue, setInputValue] = useState(1);

	useEffect(() => {
		const fetchText = async () => {
			const response = await fetch(
				`https://baconipsum.com/api/?type=all-meat&paras=${inputValue}`
			);
			const data = await response.json();
			setParagraphs(data);
		};
		fetchText();
	}, [inputValue]);

	return (
		<div className="container">
			<h1>Bacon Ipsum Generator</h1>
			<p>{paragraphs}</p>
			<label for="input">Choose Paragraphs</label>
			<input
				id="input"
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default App;
