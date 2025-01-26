import { Component, inject } from "@angular/core";
import { members } from "../info.const";
import type { Member } from "../info.const";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { of, switchMap, tap } from "rxjs";
import type { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { Title } from "@angular/platform-browser";

@Component({
	selector: "app-member",
	imports: [AsyncPipe],
	templateUrl: "./member.component.html",
	styleUrl: "./member.component.scss",
})
export class MemberComponent {
	protected member$: Observable<Member>;

	constructor() {
		const route = inject(ActivatedRoute);
		const title = inject(Title);
		this.member$ = route.paramMap.pipe(
			takeUntilDestroyed(),
			switchMap((params) => {
				const id = Number(params.get("id"));
				return of(members[id]);
			}),
			tap((member) => {
				title.setTitle(`にらさき落語会 | ${member.stageName}`);
			}),
		);
	}
}
