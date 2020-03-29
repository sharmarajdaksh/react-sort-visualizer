import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const Element = posed.div({ enter: { opacity: 1 }, exit: { opacity: 0 } });

export const ElementList = ({ elements }) => {
	return (
		<div className='element-list'>
			<PoseGroup>
				{elements.map(item => (
					<Element key={item.key}>
						<div className='element'>{item.value}</div>
					</Element>
				))}
			</PoseGroup>
		</div>
	);
};
