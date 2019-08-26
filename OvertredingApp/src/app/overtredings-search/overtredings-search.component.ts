import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OvertredingService } from "../overtreding.service";
import { Overtreding } from "../overtreding";
@Component({
  selector: 'app-overtredings-search',
  templateUrl: './overtredings-search.component.html',
  styleUrls: ['./overtredings-search.component.css']
})
export class OvertredingsSearchComponent implements OnInit {

  search: FormGroup;
  opnameplaats_straat: string;
  aantal_overtredingen_snelheid: string;
  resultOvertreding1: Overtreding[] = [];
  resultOvertreding2: Overtreding[] = [];
  allOvertredingen: Overtreding[] = [];
  constructor(private overtredingService: OvertredingService) { }

  ngOnInit() {
    this.search = new FormGroup({
      opnameplaats_straat: new FormControl(''),
      aantal_overtredingen_snelheid: new FormControl('')
    });
    this.overtredingService.getOvertredingen().subscribe(data => this.allOvertredingen = data);
  }
  onSubmitSearch1() {
    this.resultOvertreding1 = this.overtredingService.searchOvertredingByOpnameplaats_straat(this.search.value.opnameplaats_straat, this.allOvertredingen);
  }
  onSubmitSearch2() {
    this.resultOvertreding2 = this.overtredingService.searchOvertredingByAantal_overtredingen_snelheid(this.search.value.opnameplaats_straat, this.allOvertredingen);
  }
}
