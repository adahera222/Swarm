#pragma strict

var EnemySpeed : int;

function Update () {
	// Move the enemy straight down
	var amtToMove = EnemySpeed * Time.deltaTime;
	transform.Translate(Vector3.down * amtToMove);
	
	// If the enemy is at the bottom of the screen and the game is not over,
	// deduct from the score for letting it get by and "respawn" the enemy.
	if (transform.position.y <= -5.2 && GameScript.Lives > 0) {
		GameScript.Score -= 20;
		GameScript.Respawn(transform);
	}
}
