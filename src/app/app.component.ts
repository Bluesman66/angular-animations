import { state, style, transition, trigger, animate } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	animations: [
		trigger("box", [
			state("start", style({ background: "blue" })),
			state(
				"end",
				style({
					background: "red",
					transform: "scale(1.2)"
				})
			),
			state(
				"special",
				style({
					background: "orange",
					transform: "scale(0.5)",
					borderRadius: "50%"
				})
			),
			transition("start => end", animate(400)),
			transition("end => start", animate("800ms ease-in-out")),
			transition("special <=> *", [
				style({ background: "green" }),
				animate("1s", style({ background: "pink" })),
				animate(750)
			])
		])
	]
})
export class AppComponent {
	boxState = "end";

	animate() {
		this.boxState = this.boxState === "end" ? "start" : "end";
	}
}
