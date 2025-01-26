import { Component, inject } from "@angular/core";
import { of, switchMap, tap } from "rxjs";
import type { Observable } from "rxjs";
import { events } from "../info.const";
import type { Event } from "../info.const";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AsyncPipe } from "@angular/common";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-event",
	imports: [AsyncPipe],
	templateUrl: "./event.component.html",
	styleUrl: "./event.component.scss",
})
export class EventComponent {
	protected event$: Observable<Event>;

	constructor() {
		const route = inject(ActivatedRoute);
		const title = inject(Title);
		this.event$ = route.paramMap.pipe(
			takeUntilDestroyed(),
			switchMap((params) => {
				const id = Number(params.get("id"));
				return of(events[id]);
			}),
			tap((event) => {
				title.setTitle(`にらさき落語会 | ${event.eventName}`);
			}),
		);
	}
}
