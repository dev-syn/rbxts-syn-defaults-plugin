import React, { useMemo } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Boolean, CreateReactStory } from '@rbxts/ui-labs';
import { SelectableGroup } from '@rbxts/syn-defaults/components/SelectableGroup';
import { SelectableItem } from '@rbxts/syn-defaults/components/SelectableItem';

const controls = {
	SingleOnly: Boolean(true),
	RequireASelection: Boolean(true)
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {

	return (
		<SelectableGroup
		config={{
			isSingleOnly: props.controls.SingleOnly,
			requireSelection: props.controls.RequireASelection
		}}
		>
			<SelectableItem
				id={"btn_A"}
				btnType='TextButton'

				Text={"Button A"}
				Size={UDim2.fromOffset(50,50)}
			/>
			<SelectableItem
				id={"btn_B"}
				btnType='TextButton'

				Text={"Button B"}
				Size={UDim2.fromOffset(50,50)}
			/>
			<SelectableItem
				id={"btn_C"}
				btnType='TextButton'

				Text={"Button C"}
				Size={UDim2.fromOffset(50,50)}
			/>
		</SelectableGroup>
	);
});

export = story;