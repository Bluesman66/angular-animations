import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

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
      transition("start => end", animate(400)),
      transition("end => start", animate("800ms ease-in-out"))
		])
	]
})
export class AppComponent {
	boxState = "end";

	animate() {
		this.boxState = this.boxState === "end" ? "start" : "end";
	}
}
