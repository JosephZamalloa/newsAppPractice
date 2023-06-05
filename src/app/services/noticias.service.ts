import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHealines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey=environment.apiKey;
const apiUrl=environment.apiUrl


const headers=new HttpHeaders({
  'X-Api-key':apiKey
})
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

    private ejecutarQuery<T>(query:string)
    {
      query=apiUrl+query

      return this.http.get<T>(query,{headers})
    }

    headlinePageNumber=0

    getTopHeadlines(){
      this.headlinePageNumber++
    return this.ejecutarQuery<RespuestaTopHealines>(`/top-headlines?country=us&page=${this.headlinePageNumber}`)

    }

    getTopHeadlinesCategory(categoria:string){

      return this.ejecutarQuery<RespuestaTopHealines>(`/top-headlines?country=us&category=${categoria}`)

    }
}
