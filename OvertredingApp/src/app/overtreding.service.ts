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
  /*
  searchOvertredingByAantal_overtredingen_snelheid(opnameplaats_straat: string): string {
    let trainer: string = "";
    if (localStorage.getItem(name) != null) {
      trainer = localStorage.getItem(name);
    } else {
      const max: number = this.trainers.length - 1;
      const min: number = 0;
      const range: number = max - min + 1;
      const rnd: number = Math.random() * range + min;
      trainer = this.trainers[Math.floor(rnd)];
      localStorage.setItem(name, trainer);
    }
    return trainer;
  }*/
}
