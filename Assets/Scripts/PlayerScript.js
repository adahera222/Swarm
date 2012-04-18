#pragma strict
var PlayerSpeed : int;
var PlayerDeathDelay : float;
var BulletPrefab : Rigidbody;
var PlayerExplosionPrefab : Transform;

function Update () {
	// amount to move
	var amtToMove = PlayerSpeed * Input.GetAxis("Horizontal") * Time.deltaTime;
	
	// move/translate player
	transform.Translate(Vector3.right * amtToMove);
	
	// shoot
	if (Input.GetKeyDown("space")) {
		var bullet : Rigidbody;
		bullet = Instantiate(BulletPrefab, transform.position, transform.rotation);
	}
}

function OnGUI() {
	// Display the Score and Lives in the upper left corner
	GUI.Label(Rect(10, 10, 200, 50), "Score: " + GameScript.Score);
	GUI.Label(Rect(10, 30, 200, 50), "Lives: " + GameScript.Lives);
}

function OnTriggerEnter(otherObject : Collider) {
	// See if the player collided with the enemy
	if (otherObject.gameObject.tag == "Enemy") {
		// Make an explosion
		var explosion : Transform;
		explosion = Instantiate(PlayerExplosionPrefab, transform.position, transform.rotation);

		// Deduct a life, and see if there are no lives left.
		GameScript.Lives--;
		if (GameScript.Lives <= 0) {
			// After a delay so we can see the explosion, load the Game Over screen
			yield WaitForSeconds(PlayerDeathDelay);
			Application.LoadLevel(2);
		} else {
			// If we still have life left, respawn the enemy and play some more.
			GameScript.Respawn(otherObject.gameObject.transform);
		}
	}
}