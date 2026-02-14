import React from '@rbxts/react';
import { useBaseStyles, useTextStyles, CloseBtn } from '@rbxts/syn-defaults';

export function App() {

	const base = useBaseStyles();
	const text = useTextStyles();

	return (
	<frame
		{ ...base.surface }
		AnchorPoint={new Vector2(0.5,0.5)}
		Size={UDim2.fromOffset(500,350)}
		Position={UDim2.fromScale(0.5,0.5)}
	>
		<CloseBtn
			_initClosed={false}
			onClose={() => print("App close.")}
		></CloseBtn>
	</frame>
	);
}