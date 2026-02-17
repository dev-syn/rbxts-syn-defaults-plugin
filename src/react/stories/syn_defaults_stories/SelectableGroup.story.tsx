import React, { useMemo } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Boolean, ControlGroup, CreateReactStory, Number } from '@rbxts/ui-labs';
import { SelectableGroup } from '@rbxts/syn-defaults/components/SelectableGroup';
import { SelectableItem } from '@rbxts/syn-defaults/components/SelectableItem';
import { StoryWrapper } from '@rbxts/syn-defaults/index';

const controls = {
	SingleOnly: Boolean(true),
	RequireASelection: Boolean(true),

	SizeX: ControlGroup({
		Scale: Number(
			0.65, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			0, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	}),

	SizeY: ControlGroup({
		Scale: Number(
			0.4, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			0, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	}),

	["GroupOptions.itemSize.X"]: ControlGroup({
		Scale: Number(
			0.25, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			0, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	}),

	["GroupOptions.itemSize.Y"]: ControlGroup({
		Scale: Number(
			0.25, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			0, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	})
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {

	const xScale = props.controls.SizeX.Scale;
	const xOffset = props.controls.SizeX.Offset;
	const yScale = props.controls.SizeY.Scale;
	const yOffset = props.controls.SizeY.Offset;
	const size: UDim2 = new UDim2(
		new UDim(xScale,xOffset),
		new UDim(yScale,yOffset)
	);

	const xItemScale = props.controls['GroupOptions.itemSize.X'].Scale;
	const xItemOffset = props.controls['GroupOptions.itemSize.X'].Offset;
	const yItemScale = props.controls['GroupOptions.itemSize.Y'].Scale;
	const yItemOffset = props.controls['GroupOptions.itemSize.Y'].Offset;
	const itemSize: UDim2 = new UDim2(
		new UDim(xItemScale,xItemOffset),
		new UDim(yItemScale,yItemOffset)
	);

	return (
		<StoryWrapper>
			<SelectableGroup
				config={{
					isSingleOnly: props.controls.SingleOnly,
					requireSelection: props.controls.RequireASelection
				}}
				
				size={size}
				groupOptions={{
					itemSize
				}}
			>
				<SelectableItem
					id={"btn_A"}
					btnType='TextButton'

					Text={"Button A"}
				/>
				<SelectableItem
					id={"btn_B"}
					btnType='TextButton'

					Text={"Button Big"}
					btnSize={UDim2.fromScale(0.4,0.4)}
				/>
				<SelectableItem
					id={"btn_C"}
					btnType='TextButton'

					Text={"Button C"}
				/>
			</SelectableGroup>
		</StoryWrapper>
	);
});

export = story;