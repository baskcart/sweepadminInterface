import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  private insertSweepURL = environment.baseUrl+'sweepadmin/sweep/add';
  private getSweepsURL = environment.baseUrl+'sweepadmin/sweep/findByDate';
  private getSweepsByDateURL = environment.baseUrl+'sweepadmin/sweep/findByDate';
  private insertWinnerURL = environment.baseUrl+'winner/add';
  private getWinnersDailyURL = environment.baseUrl+'find/by?date=2020-12-20&type=daily';
  private getWinnerWeeklyURL = environment.baseUrl+'find/by?date=2020-12-20&type=weekly';

  public insertSweep(object:any):Observable<any>{
    return this.http.post(this.insertSweepURL,object);
  }

  public getSweeps():Observable<any>{
    return this.http.get(this.getSweepsURL);
  }

  public getSweepsByDate(date:any):Observable<any>{
    return this.http.get(this.getSweepsByDateURL+date);
  }

  public insertWinner(object:any):Observable<any>{
    return this.http.post(this.insertWinnerURL,object);
  }

  public getWinnersDaily():Observable<any>{
    return this.http.get(this.getWinnersDailyURL);
  }

  public getWinnersWeekly():Observable<any>{
    return this.http.get(this.getWinnerWeeklyURL);
  }
}
