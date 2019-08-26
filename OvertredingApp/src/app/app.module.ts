import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { OvertredingsListComponent } from "./overtredings-list/overtredings-list.component";
import { OvertredingsSearchComponent } from "./overtredings-search/overtredings-search.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { OvertredingService } from "./overtreding.service";
@NgModule({
  declarations: [AppComponent, OvertredingsListComponent, OvertredingsSearchComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [OvertredingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
