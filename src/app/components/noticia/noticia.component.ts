import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent  implements OnInit {

  @Input() noticia:Article=new Input;
  @Input() index:number=new Input;

  constructor() { }

  ngOnInit() {}

}
