import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		title: "にらさき落語会 | ホーム",
		path: "home",
		loadComponent: () =>
			import("./home/home.component").then((m) => m.HomeComponent),
	},
	{
		path: "event/:id",
		loadComponent: () =>
			import("./event/event.component").then((m) => m.EventComponent),
	},
	{
		title: "にらさき落語会 | イベント一覧",
		path: "events",
		loadComponent: () =>
			import("./events/events.component").then((m) => m.EventsComponent),
	},
	{
		title: "にらさき落語会 | 過去に開催したイベント",
		path: "past-events",
		loadComponent: () =>
			import("./past-events/past-events.component").then(
				(m) => m.PastEventsComponent,
			),
	},
	{
		path: "member/:id",
		loadComponent: () =>
			import("./member/member.component").then((m) => m.MemberComponent),
	},
	{
		title: "にらさき落語会 | メンバー一覧",
		path: "members",
		loadComponent: () =>
			import("./members/members.component").then((m) => m.MembersComponent),
	},
	{
		title: "にらさき落語会 | 活動内容",
		path: "activities",
		loadComponent: () =>
			import("./activities/activities.component").then(
				(m) => m.ActivitiesComponent,
			),
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
];
