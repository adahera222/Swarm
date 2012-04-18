#pragma strict

function OnGUI () {
	// Put up instructions and a Start button.
	var instructionText = "Instructions\nPress Left and Right arrows to move.\nPress Spacebar to fire.";
	GUI.Label(Rect(10, 10, 300, 100), instructionText);
	if (GUI.Button(Rect(10, 120, 100, 30), "Start Game")) {
		GameScript.Init();
		Application.LoadLevel(1);
	}
}