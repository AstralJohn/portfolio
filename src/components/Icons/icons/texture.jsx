import React from 'react';

function Texture(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';
	const title = props.title || "texture";

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={secondaryfill} stroke={secondaryfill}>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeWidth={strokewidth} x1="3" x2="61" y1="61" y2="3"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokewidth} x1="3" x2="45" y1="45" y2="3"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeWidth={strokewidth} x1="3" x2="29" y1="29" y2="3"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokewidth} x1="3" x2="13" y1="13" y2="3"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokewidth} x1="19" x2="61" y1="61" y2="19"/>
		<line fill="none" stroke={fill} strokeLinecap="square" strokeWidth={strokewidth} x1="36" x2="60" y1="60" y2="36"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokewidth} x1="51" x2="61" y1="61" y2="51"/>
	</g>
</svg>
	);
};

export default Texture;