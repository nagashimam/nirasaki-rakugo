import { Component } from "@angular/core";
import { events } from "../info.const";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-events",
	imports: [RouterLink],
	templateUrl: "./events.component.html",
	styleUrl: "./events.component.scss",
})
export class EventsComponent {
	protected events = events;
}
