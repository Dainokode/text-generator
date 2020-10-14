import React, { useEffect, useState } from 'react';

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
		<div>
			<h1>Bacon Ipsum Generator</h1>
			<p>{paragraphs}</p>
			<input
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default App;
