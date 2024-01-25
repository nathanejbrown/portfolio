import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as THREE from 'three';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomepageComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( this.geometry, this.material );

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  constructor(private breakpointObserver: BreakpointObserver) {}

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