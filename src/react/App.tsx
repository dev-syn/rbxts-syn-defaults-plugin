import React, { useMemo } from '@rbxts/react';
import { useBaseStyles, useTextStyles, useTheme, SynText, centerX } from '@rbxts/syn-defaults';
import { APP_MIN_WIDTH, APP_MIN_HEIGHT } from '../constants';

interface AppConfig {
	windowSize?: UDim2;
}

export function App(config: AppConfig) {
	const { windowSize=UDim2.fromOffset(APP_MIN_WIDTH,APP_MIN_HEIGHT) } = config;
	const theme = useTheme();
	
	const base = useBaseStyles();
	const text = useTextStyles();

	const appHeaderProps = useMemo<React.InstanceProps<TextLabel>>(() => ({
		AnchorPoint: new Vector2(0.5,0),
		Position: new UDim2(0.5,0,0,25),

		TextColor3: theme.colors.text.primary
	}),[ theme ]);

	return (
		<frame
			BackgroundColor3={theme.colors.background}
			AnchorPoint={new Vector2(0.5,0.5)}
			Size={windowSize}
			Position={UDim2.fromScale(0.5,0.5)}
		>
			<SynText<'tl'>
				instType='tl'
				sizeVariant='h2'
				content='Syn Defaults'
				native={appHeaderProps}
			>
			</SynText>
			<frame {...base.divider } Position={new UDim2(0.5,0,0,50)} ></frame>
			<frame
				BackgroundTransparency={0.5} // {...base.container}
				Size={new UDim2(1,0,)}
			></frame>
		</frame>
	);
}