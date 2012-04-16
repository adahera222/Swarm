#pragma strict

var EnemySpeed : int;

function Start () {

}

function Update () {
	var amtToMove = EnemySpeed * Time.deltaTime;
	transform.Translate(Vector3.down * amtToMove);
	if (transform.position.y <= -5.2) {
		PlayerScript.PlayerScore -= 20;
		Respawn(transform);
	}
}

static function Respawn (trans : Transform) {
	trans.position.y = 7;
	trans.position.x = Random.Range(-6, 6);
}