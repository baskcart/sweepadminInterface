import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  private insertSweepURL = environment.baseUrl + 'sweepadmin/sweep/add';
  private getSweepsURL = environment.baseUrl + 'sweepadmin/sweep/findByDate';
  private getSweepsByDateURL = environment.baseUrl + 'sweepadmin/sweep/findByDate';
  private insertWinnerURL = environment.baseUrl + 'winner/add';
  private getWinnersDailyURL = environment.baseUrl + 'find/by?date=2020-12-20&type=daily';
  private getWinnerWeeklyURL = environment.baseUrl + 'find/by?date=2020-12-20&type=weekly';
  private getBrandAutoCompleteURL = environment.baseUrl + "sweepproduct/stag/searchBrandByShopAndBrandPrefix";
  private getProductAutoCompleteURL = environment.baseUrl + "sweepproduct/stag/searchProductByShopAndBrandAndProductPrefix";
  private getShopAutoCompleteURL = environment.baseUrl+"sweepproduct/stag/searchShopByShopPrefix";

  public insertSweep(object: any): Observable<any> {
    return this.http.post(this.insertSweepURL, object, { responseType: 'text' });
  }

  public getSweeps(): Observable<any> {
    return this.http.get(this.getSweepsURL);
  }

  public getSweepsByDate(date: any): Observable<any> {
    return this.http.get(this.getSweepsByDateURL + date);
  }

  public insertWinner(object: any): Observable<any> {
    return this.http.post(this.insertWinnerURL, object);
  }

  public getWinnersDaily(): Observable<any> {
    return this.http.get(this.getWinnersDailyURL);
  }

  public getWinnersWeekly(): Observable<any> {
    return this.http.get(this.getWinnerWeeklyURL);
  }

  public getBrandAutoComplete(query,store): Observable<any> {
    return this.http.get(this.getBrandAutoCompleteURL,{
      params:{
        brandPrefix: query,
        shopPrefix:store
      }
    });
  }

  public getProductAutoComplete(query,brand,store): Observable<any> {
    return this.http.get(this.getProductAutoCompleteURL,{
      params:{
        productPrefix:query,
        brandPrefix:brand,
        shopPrefix:store
      }
    });
  }

  public getShopAutoComplete(query):Observable<any>{
    return this.http.get(this.getShopAutoCompleteURL,{params:{
      shopPrefix:query
    }})
  }
}
