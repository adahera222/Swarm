#pragma strict

var BulletSpeed : int;
var ExplosionPrefab : Transform;

function Start () {

}

function Update () {
	var amtToMove = BulletSpeed * Time.deltaTime;
	transform.Translate(Vector3.up * amtToMove);
	if (transform.position.y >= 6.5) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter(otherObject : Collider) {
	if (otherObject.gameObject.tag == "Enemy") {
		PlayerScript.PlayerScore += 100;
		
		EnemyScript.Respawn(otherObject.gameObject.transform);
		
		var explosion : Transform;
		explosion = Instantiate(ExplosionPrefab, transform.position, transform.rotation);
		
		Destroy(gameObject);
	}
}