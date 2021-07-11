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
  private getShopAutoCompleteURL = environment.baseUrl + "sweepproduct/stag/searchShopByShopPrefix";
  private checkFundURL = environment.baseUrl + 'stellar/balance';
  private addBrandURL = environment.baseUrl + 'sweepproduct/brand';
  private addShopURL = environment.baseUrl + "sweepproduct/shops";
  private getBrandURL = environment.baseUrl + "sweepproduct/brand/find";
  private getShopURL = environment.baseUrl + "sweepproduct/shops";
  private getAllSweepsURL = environment.baseUrl+'sweepadmin/sweep/findAll';

  public insertSweep(object: any): Observable<any> {
    return this.http.post(this.insertSweepURL, object, { responseType: 'text' });
  }

  public getSweeps(email?:string): Observable<any> {
    return this.http.get(this.getSweepsURL,{params:{
      email: (email)?email:null
    }});
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

  public getBrandAutoComplete(query, store): Observable<any> {
    return this.http.get(this.getBrandAutoCompleteURL, {
      params: {
        brandPrefix: query,
        shopPrefix: store
      }
    });
  }

  public getProductAutoComplete(query, brand, store): Observable<any> {
    return this.http.get(this.getProductAutoCompleteURL, {
      params: {
        productPrefix: query,
        brandPrefix: brand,
        shopPrefix: store
      }
    });
  }

  public getShopAutoComplete(query): Observable<any> {
    return this.http.get(this.getShopAutoCompleteURL, {
      params: {
        shopPrefix: query
      }
    })
  }

  public checkFund(string): Observable<any> {
    return this.http.post(this.checkFundURL, string);
  }

  public addShop(obj): Observable<any> {
    return this.http.post(this.addShopURL, [obj]);
  }

  public addBrand(obj): Observable<any> {
    return this.http.post(this.addBrandURL, [obj], {
      headers: {
        'WWW-Authenticate': ''
      }
    });
  }

  public getAllBrands(): Observable<any> {
   return this.http.get(this.getBrandURL);
  }

  public getAllShops(): Observable<any> {
    return this.http.get(this.getShopURL);
   }
   public getAllSweeps(): Observable<any>{
     return this.http.get(this.getAllSweepsURL);
   }
}

