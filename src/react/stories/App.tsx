import React, { useEffect, useMemo, useState } from '@rbxts/react';
import { APP_MIN_HEIGHT, APP_MIN_WIDTH } from '../../constants';

export function App() {
	return (
	<frame
		AnchorPoint={new Vector2(0.5,0.5)}
		Size={UDim2.fromScale(1,1)}
		Position={UDim2.fromScale(0.5,0.5)}
	>
	</frame>
	);
}