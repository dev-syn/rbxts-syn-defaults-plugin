import { APP_MIN_HEIGHT, APP_MIN_WIDTH } from './constants';
import { hookApp } from './react/hookApp';

const toolbar = plugin.CreateToolbar("syn_defaults");
const button = toolbar.CreateButton("syn_defaults_ui_toggle", "Toggles the syn_defaults UI.","","UI Toggle");

const dockWidget = plugin.CreateDockWidgetPluginGuiAsync(
	"syn_defaults_ui",
	new DockWidgetPluginGuiInfo(
		Enum.InitialDockState.Left,
		true,
		false,
		0, // floatXSize
		0, // floatYSize
		APP_MIN_WIDTH, // minWidth
		APP_MIN_HEIGHT // minHeight
	)
) as DockWidgetPluginGui & { Title: string };
dockWidget.Title = "syn_defaults";

// * Give our dockWidget to the app
hookApp(dockWidget);

button.Click.Connect(() => {
	dockWidget.Enabled = !dockWidget.Enabled;
	print("Button clicked!");
});