import { Component } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  toggle: boolean = false;
  team1: boolean = false;
  team2: boolean = false;
  team3: boolean = false;
  calander: boolean = false;
  val: number = 0;
  EPCC: string[] = ['Roaster', 'Team', 'UT'];
  EPCM: string[] = ['Roaster', 'Team', 'UT'];
  EPCL: string[] = ['Roaster', 'Team', 'UT'];
  func(data: any) {
    if (data.target.value == "epcc") {
      this.val = 1;
      this.team1 = !this.team1;
    }
    else if (data.target.value == "epcm") {
      this.val = 2;
      this.team2 = !this.team2;
    }
    else if (data.target.value == "epcl") {
      this.val = 3;
      this.team3 = !this.team3;
    }
  }

  OnClick() {

    this.toggle = !this.toggle;

  }
  calfunc() {
    this.calander = !this.calander;
  }
}
