import * as React from 'react';

import { IconSvgProps } from '@/types';

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 195.36 175.76'
		width={size || width}
		height={size || height}
		{...props}
	>
		<defs>
			<linearGradient
				id='New_Gradient_Swatch_2'
				x1='97.68'
				y1='0'
				x2='97.68'
				y2='176.9'
				gradientUnits='userSpaceOnUse'
			>
				<stop offset='0' stopColor='#fcb415' />
				<stop offset='1' stopColor='#f6871f' />
			</linearGradient>
		</defs>
		<path
			d='M174.72,9.43c-20.23-13.05-47.6-12.01-74.85-.26,0,0,0,0,0,0,0,0,0,0,0,0C63.63-1.73,27.17.99,9.59,24.17c-14.77,19.47-11.34,49.44,2.57,77.07,0,0,0,0,0,0-10.66,29.91-7,56.44,7.77,68.37,12.68,10.25,33.23,6.8,51.42-3.83-3.85-1.59-7.75-3.42-11.34-5.38-.75.39-11.63,5.66-22.17,6.22-4.54.24-8.48-1.08-11.41-3.41-7.19-5.7-10.24-22.03-3.51-44.04,1.91-6.28,4.62-13.02,8.27-20.1,7.39-14.4,18.61-30.23,34.76-46.51,5.8-5.85,17.04-15.65,30.65-24.48-5.53-2.91-12.06-5.5-18.17-7.38-9.09,5.85-17.95,12.85-26.27,20.86-13.09,12.59-23.19,25.9-30.56,39.05-7.77-17.85-10.91-35.36-5.9-48.64C24.91,7.55,53.23,7.5,83.05,17.82c0,0,0,0,0,0,6.02,2.08,12.1,4.59,18.09,7.4,1.67.78,0,0,0,0,22.04,10.34,42.95,24.83,55.51,37.76,0,0,2.95-6.17,5.32-11.13,1.78-3.71.8-8.15-2.36-10.79-12.15-10.14-26.25-18.62-40.94-25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17.46-7.55,36-10.54,51-1.53,23.86,14.34,3.74,66.02-6.1,87.57-18.5,40.47-46.55,66.58-70.86,57.39-2.45-.93-4.98-2.13-7.57-3.57,5.76-4.97,10.88-10.62,14.9-16.66,21.11-2.95,48.32-19.02,54.41-63.64-3.08,2.87-6.49,14.02-18.87,17.65-7.69,2.25-13.77,4.82-18.64,7.65,1.15-2.71,2.03-5.63,2.44-8.72,2.06-15.52-4.62-26.36-6.85-33.83-1.99-6.64-1.51-12.32-1.87-16.53-1.34,4.11-1.56,8.31-5.77,15.91-3.68,6.65-13.8,15.18-14.87,31.5-.12,1.88-.12,3.68-.01,5.41-3.57-3.09-7.97-6.22-13.42-9.3-8.9-5.04-6.89-18.14-8.23-22.4-15.75,39.58,9.56,65,20.91,73.26-3.94,5.09-8.49,9.71-13.35,13.72h0c-14.61-10.72-29.93-27.65-41.76-46.12-.01-.01-.01-.02-.02-.03-3.07,6.31-5.7,13.82-7.42,20.53,10.53,13.73,23.52,25.65,37.71,33.69,3.56,2.03,7.21,3.82,10.91,5.32,0,0,0,0,0,0,2.35.96,4.73,1.81,7.12,2.53,26.99,8.13,67.59-.87,97.34-59.11,13.36-26.16,29.3-75.17-5.04-97.33ZM138.79,100.99c-5.79,14.79-17.76,22.72-33.94,27.67,7.05-20.94,18.16-19.92,33.94-27.67ZM107.73,68.32c5.2,17.31,5.77,28.24-4.5,39.02-5.78-11.1-6.7-23.66,4.5-39.02ZM71.28,91.7c10.57,8.56,24.44,14.28,23.37,35.74-10.21-6.47-19.72-17.56-23.37-35.74Z'
			fill='url(#New_Gradient_Swatch_2)'
		/>
	</svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox='0 0 24 24' width={size || width} {...props}>
			<path
				d='M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z'
				fill='currentColor'
			/>
		</svg>
	);
};

export const TwitterIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox='0 0 24 24' width={size || width} {...props}>
			<path
				d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'
				fill='currentColor'
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
	return (
		<svg height={size || height} viewBox='0 0 24 24' width={size || width} {...props}>
			<path
				clipRule='evenodd'
				d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
				fill='currentColor'
				fillRule='evenodd'
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='presentation'
		viewBox='0 0 24 24'
		width={size || width}
		{...props}
	>
		<path
			d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
			fill='currentColor'
		/>
	</svg>
);

export const SunFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='presentation'
		viewBox='0 0 24 24'
		width={size || width}
		{...props}
	>
		<g fill='currentColor'>
			<path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
			<path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
		</g>
	</svg>
);

export const HeartFilledIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='presentation'
		viewBox='0 0 24 24'
		width={size || width}
		{...props}
	>
		<path
			d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
			fill='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden='true'
		fill='none'
		focusable='false'
		height='1em'
		role='presentation'
		viewBox='0 0 24 24'
		width='1em'
		{...props}
	>
		<path
			d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
		/>
		<path d='M22 22L20 20' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
	</svg>
);

export const Recycle = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 256 256'
		width={size || width}
		{...props}
	>
		<path
			fill='currentColor'
			d='M96 208a8 8 0 0 1-8 8H40a24 24 0 0 1-20.77-36l34.29-59.25l-14.05 3.75a8 8 0 1 1-4.14-15.5l32.77-8.77a8 8 0 0 1 9.8 5.66l8.79 32.77A8 8 0 0 1 81 148.5a8.4 8.4 0 0 1-2.08.27a8 8 0 0 1-7.72-5.93l-3.8-14.15L33.11 188A8 8 0 0 0 40 200h48a8 8 0 0 1 8 8m140.73-28l-23.14-40a8 8 0 0 0-13.84 8l23.14 40a8 8 0 0 1-6.89 12h-68.69l10.34-10.34a8 8 0 0 0-11.31-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.31-11.32L147.31 216H216a24 24 0 0 0 20.77-36ZM128 32a7.85 7.85 0 0 1 6.92 4l34.29 59.25l-14.08-3.78a8 8 0 0 0-4.13 15.45l32.78 8.79a8.2 8.2 0 0 0 2.07.27a8 8 0 0 0 7.72-5.93l8.79-32.79a8 8 0 1 0-15.45-4.14l-3.8 14.17L148.77 28a24 24 0 0 0-41.54 0L84.07 68a8 8 0 0 0 13.85 8l23.16-40a7.85 7.85 0 0 1 6.92-4'
		></path>
	</svg>
);

export const ForkKnife = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 256 256'
		width={size || width}
		{...props}
	>
		<path
			fill='currentColor'
			d='M72 88V40a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m144-48v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-16 13.9c-32.17 24.57-38.47 84.42-39.7 106.1H200Zm-80.11-15.21a8 8 0 1 0-15.78 2.63L112 88.63a32 32 0 0 1-64 0l7.88-47.31a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z'
		></path>
	</svg>
);

export const PigMoney = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 24 24'
		width={size || width}
		{...props}
	>
		<g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
			<path d='M15 11v.01M5.173 8.378a3 3 0 1 1 4.656-1.377'></path>
			<path d='M16 4v3.803A6.02 6.02 0 0 1 18.658 11h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 0 1-3 0v-.583a6 6 0 0 1-1 .083h-4a6 6 0 0 1-1-.083v.583a1.5 1.5 0 0 1-3 0v-2.027A6 6 0 0 1 8.999 7h2.5z'></path>
		</g>
	</svg>
);

export const ArrowRight = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 24 24'
		width={size || width}
		{...props}
	>
		<path fill='currentColor' fillRule='evenodd' d='m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z'></path>
	</svg>
);

export const Restart = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 32 32'
		width={size || width}
		{...props}
	>
		<path
			fill='currentColor'
			d='M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12Z'
		></path>
	</svg>
);

export const MapMark = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 32 32'
		width={size || width}
		{...props}
	>
		<path
			fill='currentColor'
			d='m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.2 6.2 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4'
		></path>
		<circle cx='16' cy='9' r='2' fill='currentColor'></circle>
		<path
			fill='currentColor'
			d='M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2'
		></path>
	</svg>
);

export const Recepeit = ({ size = 24, width, height, ...props }: IconSvgProps) => (
	<svg
		aria-hidden='true'
		focusable='false'
		height={size || height}
		role='img'
		viewBox='0 0 32 32'
		width={size || width}
		{...props}
	>
		<path fill='currentColor' d='M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z'></path>
		<path
			fill='currentColor'
			d='M25 2H7a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1h1a1 1 0 0 0 .8-.4l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333L16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333L10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18Z'
		></path>
	</svg>
);
