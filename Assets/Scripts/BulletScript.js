#pragma strict

var BulletSpeed : int;
var ExplosionPrefab : Transform;


function Update () {
	// Move the bullet straight up
	var amtToMove = BulletSpeed * Time.deltaTime;
	transform.Translate(Vector3.up * amtToMove);
	
	// Destroy the bullet if it is off the top of the screen.
	if (transform.position.y >= 6.5) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter(otherObject : Collider) {
	// See if the bullet collided with an enemy
	if (otherObject.gameObject.tag == "Enemy") {
		// Reward!
		GameScript.Score += 100;
		
		// "Respawn" the enemy
		GameScript.Respawn(otherObject.gameObject.transform);
		
		// Create an explosion and destroy the bullet (after we get its position for the explosion)
		var explosion : Transform;
		explosion = Instantiate(ExplosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}