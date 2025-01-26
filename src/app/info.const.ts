import { MEMBERS } from "../../data/members";
import { EVENTS } from "../../data/events";
import { PERFORMANCES } from "../../data/performances";

export const members = MEMBERS.map((member) => {
	const relatedPerformances = PERFORMANCES.filter(
		(performance) => performance.performerId === member.id,
	);
	const events = relatedPerformances.map((performance) =>
		EVENTS.find((event) => performance.eventId === event.id),
	);
	return {
		...member,
		favoriteTitle: member.favoriteTitle.split("|"),
		events,
	};
});

const plainEvents = EVENTS.map((event) => {
	const relatedPerformances = PERFORMANCES.filter(
		(performance) => performance.eventId === event.id,
	);
	const performers = relatedPerformances.map((performance) =>
		MEMBERS.find((member) => performance.performerId === member.id),
	);
	return {
		...event,
		date: new Date(event.date),
		performers,
	};
}).sort((a, b) => {
	if (a.date === b.date) {
		return a.startAt > b.startAt ? 1 : -1;
	}
	return a.date.getTime() > b.date.getTime() ? 1 : -1;
});

export type Event = (typeof plainEvents)[0];
export type Member = (typeof members)[0];

const upcommingEventIndex = (() => {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	for (let i = 0; i < plainEvents.length; i++) {
		if (yesterday.getTime() > plainEvents[i].date.getTime()) {
			return i + 1;
		}
	}
	return -1;
})();

export const pastEvents: Event[] = plainEvents.slice(0, upcommingEventIndex);
export const events: Event[] = plainEvents.slice(upcommingEventIndex);
