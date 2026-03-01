import React from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { StoryWrapper, SynField, SynFieldVariant } from '@rbxts/syn-defaults/index';
import { Choose, CreateReactStory } from '@rbxts/ui-labs';

const variants = ["Horizontal","Vertical"];
type VariantType =  keyof typeof SynFieldVariant;

const controls = {
	Variant: Choose(variants,1,true)
};

const story = CreateReactStory({
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls
},(props) => {
	// Map the control string directly to the Enum value
	const selectedVariant = SynFieldVariant[props.controls.Variant as VariantType];
	return (
		<StoryWrapper>
			<SynField
				variant={selectedVariant}
				
			></SynField>
		</StoryWrapper>
	)
});
export = story;