import React, { useRef } from '@rbxts/react';
import ReactRoblox from '@rbxts/react-roblox';
import { Choose, ControlGroup, InferProps, Number, String } from '@rbxts/ui-labs';
import { ToolTipPosition, useToolTip } from '@rbxts/syn-defaults/hooks/useToolTip';
import { ToolTipDisplay } from '@rbxts/syn-defaults/components/ToolTipDisplay';
import { ToolTipPortal } from '@rbxts/syn-defaults/portals/ToolTipPortal';

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
	Text: String(
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

		// * Some text properties that should be given to calculate tooltip size
		const calculateProps = {
			textSize: props.controls.TextSize,
			font: Enum.Font.Gotham,
			richText: false
		};

		// * Use tooltip hook
		const ctrlAnchor = props.controls.Anchor;
		const btnToolTip = useToolTip(
			testBtnRef,
			{
				content: props.controls.Text,
				delayMs: 0,
				positioningMode: props.controls.PositioningMode as ToolTipPosition,
				anchorPos: new Vector2(ctrlAnchor.X,ctrlAnchor.Y)
			},
			calculateProps
		);

		return (
			<frame
			key="StoryContainer"
			Size={UDim2.fromScale(1,1)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			>
				<textbutton
					ref={testBtnRef}
					Text="A test button"
					Size={UDim2.fromOffset(200,200)}
					TextColor3={new Color3(1,1,1)}
					BackgroundColor3={Color3.fromRGB(65,65,65)}
					AnchorPoint={new Vector2(0.5,0.5)}
					Position={UDim2.fromScale(0.5,0.5)}
				></textbutton>

				{ btnToolTip && (
					<ToolTipPortal>
						<ToolTipDisplay
							data={btnToolTip}
							calculateContentProps={calculateProps}
						/>
					</ToolTipPortal>
					)
				}
			</frame>	
		);
	}
};

export = story