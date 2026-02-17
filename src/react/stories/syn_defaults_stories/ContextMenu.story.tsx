import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import { CreateReactStory } from '@rbxts/ui-labs';
import { ContextMenu } from '@rbxts/syn-defaults/components/context_menu/ContextMenu';
import { ContextMenuItem } from '@rbxts/syn-defaults/components/context_menu/ContextMenuItem';

import { StoryWrapper } from '@rbxts/syn-defaults/index';

const controls = {};

const CONTEXT_MENU_ID = "UILabs-ContextMenu";

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	return (
		<StoryWrapper>
			<ContextMenu
				menuId={CONTEXT_MENU_ID}
				btnOptions={{
					btnType: "textbutton", size: new UDim2(0,200,0,75), content: "Lorem ipsum dolor sit"
				}}
				menuOptions={{
					fullyVisibleOnly: true
				}}
			>
				<ContextMenuItem
					id='item_1'
					content="Sample 1"
					onActivate={() => {
						print(`Inside item_1`);
					}}
				/>
			
				<ContextMenuItem
					id='item_2'
					content="Sample 2"
					onActivate={() => {
						print(`Inside item_2`);
					}}
				/>

				<ContextMenuItem
					id='item_3'
					content="Sample 3"
					onActivate={() => {
						print(`Inside item_3`);
					}}
				/>
			</ContextMenu>
		</StoryWrapper>
	);
});
export = story;