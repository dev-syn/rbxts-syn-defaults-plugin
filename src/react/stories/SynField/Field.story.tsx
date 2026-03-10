import { deunify } from '@rbxts/flamework-meta-utils';
import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { StoryWrapper, SynField, SynFieldLayoutPosition, SynFieldVariant } from '@rbxts/syn-defaults/index';
import { Choose, ControlGroup, CreateReactStory, Number, String } from '@rbxts/ui-labs';

type LayoutPositionVariant = keyof typeof SynFieldLayoutPosition;
const layoutPositionVariants = deunify<LayoutPositionVariant>();

const controls = {
	LayoutPosition: Choose(layoutPositionVariants,1,false),

	Content: ControlGroup({
		LabelContent: String("Label"),
		FieldContent: String("Field Value.")
	},1),

	FieldSizeX: ControlGroup({
		Scale: Number(
			0, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			200, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	},2),
	FieldSizeY: ControlGroup({
		Scale: Number(
			0, // default
			-5, // min
			5, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		),
		Offset: Number(
			75, // default
			-1000000, // min
			1000000, // max
			1, // step
			true, // dragger
			0.7 // sens
		)
	},3)
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	const selectedLayoutPosVariant = SynFieldLayoutPosition[props.controls.LayoutPosition as LayoutPositionVariant];
	const fieldSizeX = props.controls.FieldSizeX;
	const fieldSizeY = props.controls.FieldSizeY;
	const content = props.controls.Content;

	return (
		<StoryWrapper>
			<SynField
				variant={SynFieldVariant.Field}
				layoutPos={selectedLayoutPosVariant}
				size={new UDim2(fieldSizeX.Scale,fieldSizeX.Offset,fieldSizeY.Scale,fieldSizeY.Offset)}

				labelContent={content.LabelContent}
				fieldContent={content.FieldContent}
			></SynField>
		</StoryWrapper>
	)
});
export = story;