function findModule(loc: Instance,moduleName: string): ModuleScript | nil

	local module = loc:FindFirstChild(`{moduleName}.preview`);
	if module then return module; end

	for _,inst in ipairs(loc:GetChildren()) do
		if inst:IsA("ModuleScript") and inst.Name == `{moduleName}.preview` then return inst; end
	end

	return nil;
end

return function(moduleName: string)
	local ReplicatedStorage = game:GetService("ReplicatedStorage");
	local includeFolder = ReplicatedStorage:WaitForChild("rbxts_include");
	local runtimeLib = require(includeFolder:WaitForChild("RuntimeLib") :: ModuleScript);

	local Plugin = ReplicatedStorage:WaitForChild("Plugin");

	-- Search in stories first but fallback to the components dir
	local target =
		findModule(Plugin.react.stories,moduleName) or
		findModule(Plugin.react.components,moduleName);

	if not target then warn("\{storyloader\} could not find module: '`{moduleName}.preview`'"); end
	
	-- Inject target ModuleScript into the _G table which will point to the RuntimeLib 
	_G[target] = runtimeLib;
	return require(target);
end