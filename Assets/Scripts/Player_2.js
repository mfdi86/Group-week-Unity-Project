﻿#pragma strict

function Start () {
	
}

var health : float = 100.0;
var HealthBar: float = 0;

function Update () {
    NoHealth();
}

function NoHealth(){
    if(health <= 0){
         var anim = GetComponent(Animator);
		anim.Play("BlueDudeDeath");
		//Destroy(gameObject);
    }
}


