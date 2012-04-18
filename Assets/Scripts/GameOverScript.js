#pragma strict


function OnGUI () {
	// Save the score value so that it won't change on the screen when it's
	// set back to 0 below with GameScript.Init().
	var score = GameScript.Score;
	
	// Display Score and Play Again button.
	GUI.Label(Rect(10, 10, 200, 30), "Game over. Score=" + score);
	if (GUI.Button(Rect(10, 50, 100, 30), "Play Again")) {
	    GameScript.Init();
		Application.LoadLevel(1);
	}
}