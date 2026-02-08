import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { CreateReactStory } from '@rbxts/ui-labs';

import { DropdownTrigger } from '@rbxts/syn-defaults/components/dropdown/DropdownTrigger';
import { DropdownMenu } from '@rbxts/syn-defaults/components/dropdown/DropdownMenu'; 

const controls = {};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
},(props) => {
	return (
		<DropdownTrigger
			btnProps={{
				
			}}
		>

		</DropdownTrigger>
	);
});
export = story;