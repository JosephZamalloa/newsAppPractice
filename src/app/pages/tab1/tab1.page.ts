import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias:Article[]=[]

  constructor(private noticiasService:NoticiasService) {}

  ngOnInit(): void {
    this.cargarNoticias()
  }

  loadData( event:any){
    console.log(event)
    setTimeout(()=>
    {
      this.cargarNoticias(event)

    },3000)
  }

  cargarNoticias(event?:any){
    this.noticiasService.getTopHeadlines()
    .subscribe(
      resp=>{console.log('noticias',resp);

      if(resp.articles.length==0)
      {
        event.target.disabled=true;
        event.target.complete()
      }

      this.noticias.push(...resp.articles)
      if(event)
      {
        event.target.complete()
      }
    }
    )
  }
}
