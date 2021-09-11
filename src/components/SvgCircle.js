import './SvgCircle.css';
import React from 'react';

const SvgCircle = (props) => {
	const { startPosition, radius, stroke, size, progress, color } = props;
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (size / 100) * circumference;
	const taskProgress = progress
		? circumference - ((progress * size) / 10000) * circumference
		: circumference;
	let styleSvg = { transform: `rotate(${-90 + 3.6 * startPosition}deg)` };
	return (
		<>
			<div className='comp-SvgCircle'>
				<svg
					height={radius * 2}
					width={radius * 2}
					style={styleSvg}
					className='svg-hover'
				>
					<circle
						className='progress-ring-circle'
						stroke={'lightgrey'}
						fill='transparent'
						strokeDasharray={circumference + ' ' + circumference}
						style={{ strokeDashoffset }}
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
			</div>
			<div className='comp-SvgCircle'>
				<svg height={radius * 2} width={radius * 2} style={styleSvg}>
					<circle
						stroke={color || 'red'}
						fill='transparent'
						strokeDasharray={circumference + ' ' + circumference}
						style={{ strokeDashoffset: taskProgress }}
						strokeWidth={stroke}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				</svg>
			</div>
		</>
	);
};

export default SvgCircle;
