#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var score = GameScript.Score;
	GUI.Label(Rect(10, 10, 200, 30), "Game over. Score=" + score);
	if (GUI.Button(Rect(10, 50, 100, 30), "Play Again")) {
	    GameScript.Init();
		Application.LoadLevel(1);
	}
}