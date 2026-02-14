import React from '@rbxts/react';
import { useBaseStyles, useTextStyles, CloseBtn, useTheme } from '@rbxts/syn-defaults';

export function App() {

	const theme = useTheme();
	
	const base = useBaseStyles();
	const text = useTextStyles();

	return (
	<frame
		BackgroundColor3={theme.colors.background}
		AnchorPoint={new Vector2(0.5,0.5)}
		Size={UDim2.fromOffset(500,350)}
		Position={UDim2.fromScale(0.5,0.5)}
	>
		<uistroke
			{...base.border}
		/>	
		<CloseBtn
			onClose={() => print("App close.")}
		/>
	</frame>
	);
}