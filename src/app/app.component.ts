import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as THREE from 'three';
import { LeftNavComponent } from './components/left-nav/left-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( this.geometry, this.material );

  ngOnInit(): void {
    // this.renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( this.renderer.domElement );
    // this.scene.add( this.cube );
    // this.camera.position.z = 5;
    // this.animate();
  }


  animate() {
    requestAnimationFrame( this.animate );

    this.cube.rotation.x += 0.25;
    this.cube.rotation.y += 0.4;

    this.renderer.render( this.scene, this.camera );
  }

}
