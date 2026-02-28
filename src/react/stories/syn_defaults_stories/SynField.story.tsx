import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { StoryWrapper, SynField, SynFieldVariant } from '@rbxts/syn-defaults/index';
import { CreateReactStory } from '@rbxts/ui-labs';

const controls = {};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	return (
		<StoryWrapper>
			<SynField
				variant={SynFieldVariant.Horizontal}
			></SynField>
		</StoryWrapper>
	)
});
export = story;