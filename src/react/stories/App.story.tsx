import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory } from '@rbxts/ui-labs';
import { App } from '../App';
import { StoryWrapper } from '@rbxts/syn-defaults/helpers/StoryWrapper';
import { APP_MIN_HEIGHT, APP_MIN_WIDTH } from '../../constants';

const controls = {

};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	return (
		<StoryWrapper>
			<App/>
		</StoryWrapper>
	);
});

export = story;