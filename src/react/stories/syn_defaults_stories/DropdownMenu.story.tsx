import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory } from '@rbxts/ui-labs';

import { Dropdown } from '@rbxts/syn-defaults/components/Dropdown';
import { StoryWrapper } from '@rbxts/syn-defaults/helpers/StoryWrapper';

const controls = {};

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
					rowHeight: 30,
					padding: 4
				}}
			/>
		</StoryWrapper>
	);
});
export = story;