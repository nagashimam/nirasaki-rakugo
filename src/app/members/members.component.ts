import { Component } from "@angular/core";
import { members } from "../info.const";

@Component({
	selector: "app-members",
	imports: [],
	templateUrl: "./members.component.html",
	styleUrl: "./members.component.scss",
})
export class MembersComponent {
	protected members = members;
}
