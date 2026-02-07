import React from '@rbxts/react';
import { CloseBtn } from '@rbxts/syn-defaults/components/CloseBtn';

export function App() {
	return (
	<frame
		AnchorPoint={new Vector2(0.5,0.5)}
		Size={UDim2.fromOffset(450,700)}
		Position={UDim2.fromScale(0.5,0.5)}
	>
		<CloseBtn
		_initClosed={false}
		onClose={() => print("App close.")}
		></CloseBtn>
	</frame>
	);
}