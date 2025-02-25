import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() id!:string;
  @Input() avatar!:string;
  @Input() name!:string;
//  @Output() select = new EventEmitter();
select = output<string>();



get imagePath() {

  return '/assets/users/'+this.avatar;
}

onSelectUser() {
  // console.log("clicked");

  return this.select.emit(this.id);
}

}
