#pragma strict

// This script contains static properties and methods for two reasons:
//   1. They are easily referenced from other scripts by saying something like
//      GameScript.Score for example.
//   2. The values will survive across levels.
//
// There can be disadvantages to this technique as a program grows in complexity,
// so it must be used with care. However, so far this is a simple game, intended
// to be easily understood by new programmers, and this is simpler than other techniques
// such as the Singleton pattern. Also, I'm not a object-oriented design purist, so
// I want to see how much trouble this actually might cause as the game grows in
// complexity, assuming it ever does.

static var Score : int;
static var Lives : int;
static function Init() {
	Score = 0;
	Lives = 3;
}

static function Respawn (trans : Transform) {
	// Put the object at a random location above the play area.
	trans.position.y = 7;
	trans.position.x = Random.Range(-6, 6);
}