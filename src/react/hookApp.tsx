// ! Must be imported first
import { App } from './App';

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

export function hookApp(dockWidget: DockWidgetPluginGui) {
	const root = createRoot(new Instance("Folder"));
	root.render(
		<StrictMode>
			{createPortal(<App />, dockWidget)}
		</StrictMode>
	);
	return root;
}