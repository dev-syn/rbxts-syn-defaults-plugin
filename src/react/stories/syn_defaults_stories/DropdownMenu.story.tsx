import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory } from '@rbxts/ui-labs';

import { Dropdown } from '@rbxts/syn-defaults/components/Dropdown';

const controls = {};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
},(props) => {
	return (
		<Dropdown
			instProps={{
				AnchorPoint: new Vector2(0.5,0),
				Position: UDim2.fromScale(0.5,0),
				Size: UDim2.fromScale(0.5,0.1)
			}}
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
				rowHeight: 30,
				padding: 4
			}}
		/>
	);
});
export = story;