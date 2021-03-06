﻿#pragma strict

function Start () {
    
}

var speed : float = 1.0;
var health : float = 100.0;

function Update () {
    var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
    transform.position += move * speed * Time.deltaTime;

    NoHealth();
}

function OnCollisionEnter2D(coll: Collision2D){
    if(coll.gameObject.name == "Player 2"){
        health -= 5;
    }

}

function NoHealth(){
    if(health <= 0){
        Destroy(gameObject);
    }
}