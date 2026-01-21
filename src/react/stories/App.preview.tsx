import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { App } from './App';
import { InferProps } from '@rbxts/ui-labs';

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: [],
	story: (props: InferProps<{}>) => {
		const comp = <App/>;
		return comp;
	}
}

export = story;