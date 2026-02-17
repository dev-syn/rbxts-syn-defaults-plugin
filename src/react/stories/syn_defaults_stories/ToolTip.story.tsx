import React, { useMemo, useRef } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Choose, ControlGroup, InferProps, Number, String } from '@rbxts/ui-labs';
import { ToolTipPosition, useToolTip } from '@rbxts/syn-defaults/hooks/useToolTip';
import { ToolTipPortal } from '@rbxts/syn-defaults/portals/ToolTipPortal';
import { center, FontProps, StoryWrapper, SynText, ToolTipDisplay, useBaseStyles, useTheme } from '@rbxts/syn-defaults';

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
		const testBtnRef = useRef<TextButton>();

		const theme = useTheme();
		print(`Theme: ${theme}`)
		const base = useBaseStyles();
		
		// * Some text properties that should be given to calculate tooltip size
		const calculateProps = useMemo(() =>({
			font: theme.typography.mainFont ? theme.typography.mainFont : Font.fromEnum(theme.typography.legacy?.mainFont ?? Enum.Font.Roboto),
			textSize: props.controls.TextSize ?? theme.typography.size.body,
			richText: false
		}),[ theme, props.controls]);

		// * Use tooltip hook
		const ctrlAnchor = props.controls.Anchor;
		const btnToolTip = useToolTip(
			testBtnRef,
			{
				content: props.controls.Content,
				delayMs: 0,
				positioningMode: props.controls.PositioningMode as ToolTipPosition,
				anchorPos: new Vector2(ctrlAnchor.X,ctrlAnchor.Y)
			},
			calculateProps
		);

		return (
			<StoryWrapper>
				<SynText<"tb">
					instType='tb'
					ref={testBtnRef}
					sizeVariant='body'
					content={props.controls.Content}

					native={{
						Size: new UDim2(0.3,0,0.2,0),
						BackgroundColor3: theme.colors.background,
						TextColor3: theme.colors.text.primary,
						BorderSizePixel: 0,
						...center
					}}
					
				>
					<uistroke {...base.border}/>
					{ btnToolTip && (
					<ToolTipPortal>
						<ToolTipDisplay
							data={btnToolTip}
							calculateContentProps={calculateProps}
						/>
					</ToolTipPortal>
					)
				}
				</SynText>
			</StoryWrapper>
		);
	}
};

export = story