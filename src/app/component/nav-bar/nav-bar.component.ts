import { Component } from '@angular/core';
import { AuntenticacionService } from '../../servicios/auntenticacion.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
constructor(public authServicio: AuntenticacionService, private router: Router){}
 cerrarSesion() {
    this.authServicio.logout();
  this.router.navigateByUrl('/login');
  }

}
