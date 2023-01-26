import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { BehaviorSubject, catchError, Observable, observable, pipe, Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  x: any;

  constructor( private http:HttpClient) { }

  getData(){
    let url="http://172.17.10.41:8000/getdata/";
return this.http.get(url)

//   .pipe(catchError(this.errorHandler))}
// errorHandler(error:HttpErrorResponse)
// {  
//   return throwError(error.message || "unknown Server Error")
// }

  }

PostData(data: any)
{
  let url1="http://172.17.10.41:8000/postdata";
 return this.http.post(url1,data)
}


DeleteData(data:any)
{
  let url2='http://172.17.10.41:8000/delete/'+data;
  return this.http.delete(url2,data)

}


putData(data:any ){
  let url3='http://172.17.10.41:8000/putdata';
  return this.http.put(url3,data)
}

sub=new Subject<string>()


obs(){

  var obser=new Observable(item=>
    {
      item.next("Barnbas")
      setTimeout(() => {
        item.next("Hema")
      },2000
      );
      setTimeout(() => {
        item.next("Chinna")
      },4000
      );
      setTimeout(() => {
        item.next("Vandana")
      },6000
      );
      setTimeout(() => {
        item.next("Vineetha")
      },8000
      );
      setTimeout(() => {
        item.next("Bye")
      },10000
      );
    })
    return obser
}


 babi=new BehaviorSubject<any>("")

 
getToken()
{
  return localStorage.getItem('data')
}
}