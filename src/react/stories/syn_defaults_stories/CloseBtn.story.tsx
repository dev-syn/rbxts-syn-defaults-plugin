import React, { useEffect, useMemo, useState } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory, RGBA, Slider, String } from '@rbxts/ui-labs';

import { BaseTheme, CloseBtn } from '@rbxts/syn-defaults';

const controls = {
	Content: String("rbxassetid://14914804859"),
	Size: Slider(0.3,0,1,0.1),
	ButtonColor: RGBA(
		BaseTheme.colors.state.err,
		0
	),
	BackgroundColor: RGBA(
		BaseTheme.colors.surface.main,
		0
	)
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

	return (
		<CloseBtn
			contentImg={props.controls.Content}
			size={buttonSize}
			imgColor={props.controls.ButtonColor.Color}
			bgColor={props.controls.BackgroundColor.Color}
			onClose={() => print("Close button pressed.")}
		/>
	);
});
export = story;