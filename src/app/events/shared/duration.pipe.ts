import {
  Pipe,
  PipeTransform,
} from "@angular/core";

@Pipe({
  name: "duration",
})

export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const durations = {
      1: "Half Hour",
      2: "1 Hour",
      3: "Half Day",
      4: "Full Day",
      defaultValue: value.toString()
    };

    return durations[value] || durations.defaultValue;
  }
}
