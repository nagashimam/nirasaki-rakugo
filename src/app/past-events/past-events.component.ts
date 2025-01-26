import { Component } from "@angular/core";
import { pastEvents } from "../info.const";

@Component({
	selector: "app-past-events",
	imports: [],
	templateUrl: "./past-events.component.html",
	styleUrl: "./past-events.component.scss",
})
export class PastEventsComponent {
	protected pastEvents = pastEvents;
}
