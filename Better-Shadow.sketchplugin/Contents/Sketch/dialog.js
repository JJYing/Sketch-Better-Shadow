// Main settings
var settings = {
  blurIteration: "3",
  blurRadius: "15",
  blurOffsetX: "0",
  blurOffsetY: "20",
  blurSpread: "0",
  blurColor: "000000",
  blurOpacity: "0.15"
}

// Label function
function createLabel(text, frame) {
  var label = [[NSTextField alloc] initWithFrame:frame];
  [label setStringValue:text];
  [label setFont:[NSFont systemFontOfSize:12]];
  [label setBezeled:false];
  [label setDrawsBackground:false];
  [label setEditable:false];
  [label setSelectable:false];
  return label;
}

// Dialog
function blurSettings(context) {
  var viewBox = [[NSBox alloc] initWithFrame:NSMakeRect(0, 0, 0, 0)];
  viewBox.title = "";
  viewBox.titleFont = [NSFont systemFontOfSize:1]
  viewBox.transparent = true

  [viewBox addSubview:createLabel("X Offset", NSMakeRect(0, 80, 60, 20))];
  var blurOffsetXInput = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 60, 60, 20)];
  [blurOffsetXInput setStringValue: settings.blurOffsetX];
  [viewBox addSubview: blurOffsetXInput];

  [viewBox addSubview:createLabel("Y Offset", NSMakeRect(80, 80, 60, 20))];
  var blurOffsetYInput = [[NSTextField alloc] initWithFrame:NSMakeRect(80, 60, 60, 20)];
  [blurOffsetYInput setStringValue: settings.blurOffsetY];
  [viewBox addSubview: blurOffsetYInput];

  [viewBox addSubview:createLabel("Radius", NSMakeRect(160, 80, 60, 20))];
  var blurRadiusInput = [[NSTextField alloc] initWithFrame: NSMakeRect(160, 60, 60, 20)];
  [blurRadiusInput setStringValue: settings.blurRadius];
  [viewBox addSubview: blurRadiusInput];

  [viewBox addSubview:createLabel("Spread", NSMakeRect(240, 80, 70, 20))];
  var blurSpreadInput = [[NSTextField alloc] initWithFrame:NSMakeRect(240, 60, 60, 20)];
  [blurSpreadInput setStringValue: settings.blurSpread];
  [viewBox addSubview: blurSpreadInput];

  [viewBox addSubview:createLabel("Opacity", NSMakeRect(320, 80, 60, 20))];
  var blurOpacityInput = [[NSTextField alloc] initWithFrame:NSMakeRect(320, 60, 60, 20)];
  [blurOpacityInput setStringValue: settings.blurOpacity];
  [viewBox addSubview: blurOpacityInput];

  [viewBox addSubview:createLabel("Iterations", NSMakeRect(0, 25, 70, 20))];
  var blurIterationInput = [[NSTextField alloc] initWithFrame:NSMakeRect(0, 5, 60, 20)];
  [blurIterationInput setStringValue: settings.blurIteration];
  [viewBox addSubview: blurIterationInput];

  [viewBox addSubview:createLabel("Color #", NSMakeRect(80, 25, 70, 20))];
  var blurColorInput = [[NSTextField alloc] initWithFrame:NSMakeRect(80, 5, 60, 20)];
  [blurColorInput setStringValue: settings.blurColor];
  [viewBox addSubview: blurColorInput];

  [viewBox sizeToFit];

  var alert = [[NSAlert alloc] init];
  [alert setMessageText: "Shadow Settings"];
  [alert addButtonWithTitle: "OK"];
  [alert addButtonWithTitle: "Cancel"];
  [alert setAccessoryView:viewBox];
  var responseCode = [alert runModal];

  settings.blurRadius = Number(blurRadiusInput.stringValue())
  settings.blurOffsetY = Number(blurOffsetYInput.stringValue())
  settings.blurOffsetX = Number(blurOffsetXInput.stringValue())
  settings.blurIteration = Number(blurIterationInput.stringValue())
  settings.blurOpacity = Number(blurOpacityInput.stringValue())
  settings.blurColor = blurColorInput.stringValue()
  settings.blurSpread = Number(blurSpreadInput.stringValue())

  // Return values
  return settings;
}

blurSettings()
