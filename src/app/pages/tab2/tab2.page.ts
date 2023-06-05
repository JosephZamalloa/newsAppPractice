import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment) segment!:IonSegment;

   noticias:Article[]=[];
    categorias=['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    constructor(private NoticiasService:NoticiasService){

    }
    ngOnInit(){
     this.cargarNoticias(this.categorias[0])
    }
    ngAfterViewInit() {
      if (this.segment) {
        this.segment.value = this.categorias[0];
      }
    }

    cambioCategoria(event:any){
      this.noticias=[]
      console.log(event)
      this.cargarNoticias(event.detail.value)

    }



    cargarNoticias(categoria:string){

      this.NoticiasService.getTopHeadlinesCategory(categoria)
      .subscribe(resp=>{console.log(resp);
      this.noticias.push(...resp.articles)
      })

    }
}
