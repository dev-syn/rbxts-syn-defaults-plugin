import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory } from '@rbxts/ui-labs';
import { App } from '../App';

const controls = {};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	return (<App/>);
});

export = story;