import {
  TestBed,
  async,
} from "@angular/core/testing";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { NavComponent } from "./nav/nav.component";
import { EventThumbnailComponent } from "./events/event-thumnail.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsAppComponent,
        EventsListComponent,
        NavComponent,
        EventThumbnailComponent
      ],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(EventsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Upcomming Angular Events");
  }));
});
