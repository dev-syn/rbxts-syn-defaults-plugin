import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';

import { CreateReactStory } from '@rbxts/ui-labs';
import { ContextMenuTrigger } from '@rbxts/syn-defaults/components/ContextMenuTrigger';
import { ContextMenu } from '@rbxts/syn-defaults/components/ContextMenu';
import { ContextMenuItem } from '@rbxts/syn-defaults/components/ContextMenuItem';

const controls = {};

const CONTEXT_MENU_ID = "UILabs-ContextMenu";

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	return (
		<frame
			key="StoryContainer"
			Size={UDim2.fromScale(1,1)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			>
			<ContextMenuTrigger
				menuId={CONTEXT_MENU_ID}
				Text="Right-click me to open the context menu."
				LayoutOrder={4}
				Size={UDim2.fromScale(0.3,0.25)}
			/>
			<ContextMenu
				menuId={CONTEXT_MENU_ID}
				config={{
					fullyVisibleOnly: true
				}}
			>
				<ContextMenuItem
					id='item_1'
					text="Sample 1"
					onActivate={() => {
						print(`Inside item_1`);
					}}
				/>
			
				<ContextMenuItem
					id='item_2'
					text="Sample 2"
					onActivate={() => {
						print(`Inside item_2`);
					}}
				/>

				<ContextMenuItem
					id='item_3'
					text="Sample 3"
					onActivate={() => {
						print(`Inside item_3`);
					}}
				/>
			</ContextMenu>
		</frame>
	);
});
export = story;