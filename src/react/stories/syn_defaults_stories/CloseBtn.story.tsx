import React, { useEffect, useMemo, useState } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Boolean, CreateReactStory, RGBA, Slider, String } from '@rbxts/ui-labs';

import { DEFAULT_ELEMENT_COLOR } from '@rbxts/syn-defaults/constants';

import { CloseBtn } from '@rbxts/syn-defaults/components/CloseBtn';

const controls = {
	Content: String("rbxassetid://14914804859"),
	Size: Slider(0.3,0,1,0.1),
	ButtonColor: RGBA(
		Color3.fromRGB(215,0,0),
		0
	),
	BackgroundColor: RGBA(
		DEFAULT_ELEMENT_COLOR,
		0
	),
	IsClosed: Boolean(false)
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
},(props) => {
	const values = props.controls;

	const buttonSize = useMemo(() => {
		return new UDim2(values.Size,0,values.Size,0);
	},[values.Size]);

	const [localClosed, setLocalClosed] = useState(props.controls.IsClosed);

	useEffect(() => {
		setLocalClosed(props.controls.IsClosed);
	},[props.controls.IsClosed]);

	return (
		<>
		{!localClosed && 
			<CloseBtn
				_initClosed={props.controls.IsClosed}

				btnContent={props.controls.Content}
				size={buttonSize}
				btnColor={props.controls.ButtonColor.Color}
				bgColor={props.controls.BackgroundColor.Color}

				onClose={() => setLocalClosed(true)}
			/>
		}
		</>
	);
});
export = story;