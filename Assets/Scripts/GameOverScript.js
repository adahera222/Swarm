#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.Label(Rect(10, 10, 200, 30), "Game over. Score=" + PlayerScript.PlayerScore);
	if (GUI.Button(Rect(10, 50, 100, 30), "Play Again")) {
	    PlayerScript.PlayerScore = 0;
		Application.LoadLevel(1);
	}
}