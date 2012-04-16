#pragma strict
var PlayerSpeed : int;
var PlayerDeathDelay : float;
var BulletPrefab : Rigidbody;
var PlayerExplosionPrefab : Transform;

function Start () {

}

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
	GUI.Label(Rect(10, 10, 200, 50), "Score: " + GameScript.Score);
	GUI.Label(Rect(10, 30, 200, 50), "Lives: " + GameScript.Lives);
}

function OnTriggerEnter(otherObject : Collider) {
	if (otherObject.gameObject.tag == "Enemy") {
				
		var explosion : Transform;
		explosion = Instantiate(PlayerExplosionPrefab, transform.position, transform.rotation);

		GameScript.Lives--;
		if (GameScript.Lives <= 0) {
			yield WaitForSeconds(PlayerDeathDelay);
			Application.LoadLevel(2);
		} else {
			EnemyScript.Respawn(otherObject.gameObject.transform);
		}
	}
}