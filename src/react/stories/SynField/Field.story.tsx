import { deunify } from '@rbxts/flamework-meta-utils';
import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { StoryWrapper, SynField, SynFieldLayoutPosition, SynFieldVariant } from '@rbxts/syn-defaults/index';
import { Choose, ControlGroup, CreateReactStory, Number, String } from '@rbxts/ui-labs';

type FieldTypeVariant = keyof typeof SynFieldVariant;
const fieldVariants = deunify<FieldTypeVariant>();

type LayoutPositionVariant = keyof typeof SynFieldLayoutPosition;
const layoutPositionVariants = deunify<LayoutPositionVariant>();

const controls = {
	TypeVariant: Choose(fieldVariants,1,true),
	LayoutPosition: Choose(layoutPositionVariants,1,true),

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
	}),
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
	}),

	LabelContent: String("Label"),
	FieldContent: String("Field Value.")
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	// Map the control string directly to the Enum value
	const selectedVariant = SynFieldVariant[props.controls.TypeVariant as FieldTypeVariant];
	const selectedLayoutPosVariant = SynFieldLayoutPosition[props.controls.LayoutPosition as LayoutPositionVariant];

	const fieldSizeX = props.controls.FieldSizeX;
	const fieldSizeY = props.controls.FieldSizeY;

	return (
		<StoryWrapper>
		{(() => {
			switch(selectedVariant) {
				case SynFieldVariant.Field:
					return (
						<SynField
							variant={selectedVariant}
							layoutPos={selectedLayoutPosVariant}
							size={new UDim2(fieldSizeX.Scale,fieldSizeX.Offset,fieldSizeY.Scale,fieldSizeY.Offset)}

							labelContent=''
							fieldContent=''
						></SynField>
					);
			default:
				throw `{syn-defaults}: Only SynFieldVariant.Field has been implemented, more coming soon!`;
			}
		})()}
		</StoryWrapper>
	)
});
export = story;