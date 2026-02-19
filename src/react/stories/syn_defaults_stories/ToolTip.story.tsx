import React, { useMemo } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Choose, ControlGroup, InferProps, Number, String } from '@rbxts/ui-labs';
import { ToolTipConfig, ToolTipPosition } from '@rbxts/syn-defaults/hooks/useToolTip';
import {StoryWrapper, ToolTipDisplay, useTheme } from '@rbxts/syn-defaults';

const controls = {
	Anchor: ControlGroup({
		X: Number(
			0.5, // default
			-1000000, // min
			1000000, // max
			0.05, // step
			true, // dragger
		0.7 // sens
		),
		Y: Number(
			1.05, // default
			-1000000, // min
			1000000, // max
			0.05, // step
			true, // dragger
			0.7 // sens
		)
	}
),
	PositioningMode: Choose(["TargetRelative","MouseBased"],1,true),
	Content: String(
		"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
	),
	TextSize: Number(18,12,42,1,true,0.8),
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferProps<typeof controls>) => {
		const theme = useTheme();
		
		// * Use tooltip hook
		const _controls = props.controls;
		const ctrlAnchor = _controls.Anchor;
		const toolTipConfig = useMemo<ToolTipConfig>(() => ({
			content: _controls.Content,
			delayMs: 0,
			positioningMode: _controls.PositioningMode as ToolTipPosition,
			anchorPos: new Vector2(ctrlAnchor.X,ctrlAnchor.Y)
		}),[ _controls ]);

		// * Some text properties that should be given to calculate tooltip size
		const calculateProps = useMemo(() =>({
			font: theme.typography.mainFont ? theme.typography.mainFont : Font.fromEnum(theme.typography.legacy?.mainFont ?? Enum.Font.Roboto),
			textSize: props.controls.TextSize ?? theme.typography.size.body,
			richText: false
		}),[ theme, _controls ]);

		return (
			<StoryWrapper>
				<ToolTipDisplay
					toolTipConfig={toolTipConfig}
					calculateContentProps={calculateProps}
					overrides={{
						label: {},
						trigger: {
							Size: new UDim2(0,300,0,150)
						}
					}}
				/>
			</StoryWrapper>
		);
	}
};

export = story