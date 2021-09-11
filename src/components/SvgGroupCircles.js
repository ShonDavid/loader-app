// import './SvgGroupCircles.css';
import React from 'react';

const SvgGroupCircles = (props) => {
	const mouseHandleEvent = (e) => {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left; //x position within the element.
		var y = e.clientY - rect.top; //y position within the element.
		console.log('Left? : ' + x + ' ; Top? : ' + y + '.');
	};
	return (
		<div className='comp-SvgGroupCircles' onClick={mouseHandleEvent}>
			{props.children.map((child, index) =>
				React.cloneElement(child, {
					startPosition: (index / props.children.length) * 100,
					size: 100 / props.children.length - 1.5,
					radius: props.radius,
					stroke: props.stroke,
					key: index,
				})
			)}
		</div>
	);
};

export default SvgGroupCircles;
