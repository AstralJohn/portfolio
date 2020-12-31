import React from 'react';

function EditBrightness(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';
	const title = props.title || "edit brightness";

	return (
		<svg height={height} width={width} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={secondaryfill} stroke={secondaryfill}>
		<path d="M32,46A14,14,0,0,0,46,32,14,14,0,0,0,60,46" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M51.369,49A13.957,13.957,0,0,0,46,60,14,14,0,0,0,32,46" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M4,18A14,14,0,0,0,18,4,14,14,0,0,0,32,18" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M42,13a9,9,0,0,0,9-9,9,9,0,0,0,9,9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M42,13a9,9,0,0,1,9,9,9,9,0,0,1,9-9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M4,51a9,9,0,0,0,9-9,9,9,0,0,0,9,9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M4,51a9,9,0,0,1,9,9,9,9,0,0,1,9-9" fill="none" stroke={secondaryfill} strokeLinecap="butt" strokeWidth={strokewidth}/>
		<path d="M23.369,21A13.957,13.957,0,0,0,18,32,14,14,0,0,0,4,18" fill="none" stroke={fill} strokeLinecap="butt" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
};

export default EditBrightness;