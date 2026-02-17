import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory, Number } from '@rbxts/ui-labs';

import { Dropdown } from '@rbxts/syn-defaults/components/Dropdown';
import { StoryWrapper } from '@rbxts/syn-defaults/helpers/StoryWrapper';
import { BaseTheme } from '@rbxts/syn-defaults/index';

const controls = {
	RowHeight: Number(
		60,
		1,
		1000000,
		1,
		true,
		0.7
	)
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
},(props) => {
	return (
		<StoryWrapper>
			<Dropdown
				menuId='ui_labs_dropdown'
				choices={[
					"Choice_Alpha",
					"Choice_Bravo",
					"Choice_Charlie",
					"Choice_Delta",
					"Choice_Echo",
					"Choice_Foxtrot"
				]}
				_default={3}
				
				menuOptions={{
					rowHeight: props.controls.RowHeight
				}}
			/>
		</StoryWrapper>
	);
});
export = story;