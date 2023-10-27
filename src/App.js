import { useEffect, useState } from 'react';

import './App.css';

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	return (
		<div className='App'>
			<h1 className='title'>Comments List (Smooth Scroll)</h1>

			<div className='comments-wrapper'>
				{data &&
					data.map((comment) => (
						<div
							key={comment.id}
							className='comment-block'>
							<h3> {comment.name}</h3>
							<p> {comment.body}</p>
							<h5>{comment.email}</h5>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
