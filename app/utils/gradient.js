"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("color");
var Types;
(function (Types) {
    Types[Types["LINEAR_GRADIENT"] = 0] = "LINEAR_GRADIENT";
    Types[Types["RADIAL_GRADIENT"] = 1] = "RADIAL_GRADIENT";
    Types[Types["SWEEP_GRADIENT"] = 2] = "SWEEP_GRADIENT";
    Types[Types["RING"] = 3] = "RING";
})(Types = exports.Types || (exports.Types = {}));
exports.Orientation = {
    BL_TR: 'BL_TR',
    BOTTOM_TOP: 'BOTTOM_TOP',
    BR_TL: 'BR_TL',
    LEFT_RIGHT: 'LEFT_RIGHT',
    RIGHT_LEFT: 'RIGHT_LEFT',
    TL_BR: 'TL_BR',
    TOP_BOTTOM: 'TOP_BOTTOM',
    TR_BL: 'TR_BL',
};
function setBackgroundGradient(args) {
    var colors = [];
    var backgroundDrawable = new android.graphics.drawable.GradientDrawable();
    args.colorCodes.forEach(function (c) { return colors.push((new color_1.Color(c)).android); });
    backgroundDrawable.setColors(colors);
    backgroundDrawable.setGradientType(args.type || Types.LINEAR_GRADIENT); // Defaults Linear Gradient
    var orient = args.orientation || exports.Orientation.LEFT_RIGHT; // Defaults to LEFT_RIGHT
    var orientation = android.graphics.drawable.GradientDrawable.Orientation[orient];
    backgroundDrawable.setOrientation(orientation);
    args.view.android.setBackgroundDrawable(backgroundDrawable);
}
exports.setBackgroundGradient = setBackgroundGradient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE4QjtBQUc5QixJQUFZLEtBS1g7QUFMRCxXQUFZLEtBQUs7SUFDZix1REFBZSxDQUFBO0lBQ2YsdURBQWUsQ0FBQTtJQUNmLHFEQUFjLENBQUE7SUFDZCxpQ0FBSSxDQUFBO0FBQ04sQ0FBQyxFQUxXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUtoQjtBQUNZLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLEtBQUssRUFBRSxPQUFPO0lBQ2QsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxVQUFVLEVBQUUsWUFBWTtJQUN4QixVQUFVLEVBQUUsWUFBWTtJQUN4QixLQUFLLEVBQUUsT0FBTztJQUNkLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0NBQ2YsQ0FBQTtBQUVELCtCQUFzQyxJQUVyQztJQUVDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLGtCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7SUFDbEUsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtJQUVuRyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLG1CQUFXLENBQUMsVUFBVSxDQUFDLENBQUMseUJBQXlCO0lBQ3BGLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRixrQkFBa0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBZEQsc0RBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcbmV4cG9ydCBlbnVtIFR5cGVzIHtcbiAgTElORUFSX0dSQURJRU5ULFxuICBSQURJQUxfR1JBRElFTlQsXG4gIFNXRUVQX0dSQURJRU5ULFxuICBSSU5HLFxufVxuZXhwb3J0IGNvbnN0IE9yaWVudGF0aW9uID0ge1xuICBCTF9UUjogJ0JMX1RSJyxcbiAgQk9UVE9NX1RPUDogJ0JPVFRPTV9UT1AnLFxuICBCUl9UTDogJ0JSX1RMJyxcbiAgTEVGVF9SSUdIVDogJ0xFRlRfUklHSFQnLFxuICBSSUdIVF9MRUZUOiAnUklHSFRfTEVGVCcsXG4gIFRMX0JSOiAnVExfQlInLFxuICBUT1BfQk9UVE9NOiAnVE9QX0JPVFRPTScsXG4gIFRSX0JMOiAnVFJfQkwnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFja2dyb3VuZEdyYWRpZW50KGFyZ3M6IHtcbiAgdmlldzogVmlldywgY29sb3JDb2Rlczogc3RyaW5nW10sIHR5cGU/OiBudW1iZXIsIG9yaWVudGF0aW9uPzogc3RyaW5nXG59KVxue1xuICBsZXQgY29sb3JzID0gW107XG4gIGxldCBiYWNrZ3JvdW5kRHJhd2FibGUgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlKCk7XG4gIGFyZ3MuY29sb3JDb2Rlcy5mb3JFYWNoKGMgPT4gY29sb3JzLnB1c2goKG5ldyBDb2xvcihjKSkuYW5kcm9pZCkpO1xuICBiYWNrZ3JvdW5kRHJhd2FibGUuc2V0Q29sb3JzKGNvbG9ycyk7XG4gIGJhY2tncm91bmREcmF3YWJsZS5zZXRHcmFkaWVudFR5cGUoYXJncy50eXBlIHx8IFR5cGVzLkxJTkVBUl9HUkFESUVOVCk7IC8vIERlZmF1bHRzIExpbmVhciBHcmFkaWVudFxuXG4gIGNvbnN0IG9yaWVudCA9IGFyZ3Mub3JpZW50YXRpb24gfHwgT3JpZW50YXRpb24uTEVGVF9SSUdIVDsgLy8gRGVmYXVsdHMgdG8gTEVGVF9SSUdIVFxuICBjb25zdCBvcmllbnRhdGlvbiA9IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5PcmllbnRhdGlvbltvcmllbnRdO1xuICBiYWNrZ3JvdW5kRHJhd2FibGUuc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICBhcmdzLnZpZXcuYW5kcm9pZC5zZXRCYWNrZ3JvdW5kRHJhd2FibGUoYmFja2dyb3VuZERyYXdhYmxlKTtcbn1cbiJdfQ==