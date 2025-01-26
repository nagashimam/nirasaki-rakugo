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

export const events = EVENTS.map((event) => {
	const relatedPerformances = PERFORMANCES.filter(
		(performance) => performance.eventId === event.id,
	);
	const performers = relatedPerformances.map((performance) =>
		MEMBERS.find((member) => performance.performerId === member.id),
	);
	return {
		...event,
		performers,
	};
}).sort((a, b) => {
	if (a.date === b.date) {
		return a.startAt > b.startAt ? 1 : -1;
	}
	return a.date > b.date ? 1 : -1;
});

export type Event = (typeof events)[0];
export type Member = (typeof members)[0];
