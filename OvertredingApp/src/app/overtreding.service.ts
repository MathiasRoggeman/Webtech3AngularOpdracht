import { Injectable, SystemJsNgModuleLoader } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Overtreding } from "./overtreding";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OvertredingService {
  private _url: string = "/assets/data/overtredingen.json";

  constructor(private http: HttpClient) { }

  getOvertredingen(): Observable<Overtreding[]> {
    return this.http.get<Overtreding[]>(this._url);
  }

  searchOvertredingByOpnameplaats_straat(opnameplaats_straat: string, allOvertredingen: Overtreding[]): Overtreding[] {
    const someOvertreding: Overtreding[] = [];
    for (const overtreding of allOvertredingen) {

      if (overtreding.opnameplaats_straat == opnameplaats_straat) {
        someOvertreding.push(overtreding);
      }
    }

    return someOvertreding;
  }

  searchOvertredingByAantal_overtredingen_snelheid(aantal_overtredingen_snelheid: string, allOvertredingen: Overtreding[]): Overtreding[] {

    const someOvertreding2: Overtreding[] = [];
    for (const overtreding of allOvertredingen) {

      if (overtreding.aantal_overtredingen_snelheid >= aantal_overtredingen_snelheid) {
        someOvertreding2.push(overtreding);
      }
    }
    return someOvertreding2;
  }
}
