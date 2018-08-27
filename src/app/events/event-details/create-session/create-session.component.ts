import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { ISession } from "../../shared/event.model";

@Component({
  templateUrl: "./create-session.component.html",
  styles: [`
    .session-error__required,
    .session-error__max-length,
    .session-error__restricted-words,
    .session-error.session-error_max-length .session-error__required,
    .session-error.session-error_restricted-words .session-error__required,
    .session-error.session-error_restricted-words .session-error_max-length {
      display: none;
    }

    .session-error_max-length .session-error__max-length {
      display: block;
      float: right;
      color: yellow;
    }

    .session-error .session-error__required {
      display: block;
      float: right;
      color: red;
    }

    .session-error.session-error_restricted-words .session-error__restricted-words {
      display: block;
      float: right;
      color: brown;
    }

    .session-error input {
      background-color: antiquewhite;
    }

    .session-error input::placeholder {
      color: crimson;
    }

    .session-error-max-length {
      background-color: antiquewhite;
    }
  `]
})

export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;

  ngOnInit() {
    this.newSessionForm = new FormGroup({
      sessionName: new FormControl("", Validators.required),
      presenter: new FormControl("", Validators.required),
      duration: new FormControl("", Validators.required),
      level: new FormControl("", Validators.required),
      abstract: new FormControl("", [
        Validators.required,
        Validators.maxLength(400),
        this.restrictedWords(["foo", "bar"])
      ])
    });
  }

  saveSession(formData): void {
    const session: ISession = {
      id: undefined,
      name: formData.sessionName,
      presenter: formData.presenter,
      duration: +formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      voters: []
    };

    console.log(formData, session);
  }

  getErrorCSSClass(controlName: string): boolean {
    if (this.newSessionForm.controls[controlName].invalid && this.newSessionForm.controls[controlName].touched) {
      return true;
    }
  }

  getMaxLengthErrorCSSClass(controlName: string): boolean {
    if (this.newSessionForm.controls[controlName].errors && this.newSessionForm.controls[controlName].errors.maxlength) {
      return true;
    }
  }

  private restrictedWords(words: any[]) {
    return (control: FormControl): { [key: string]: any } => {
      if (!words) {
        return null;
      }

      const invalidWords = words
        .map((w) => control.value.includes(w) ? w : null)
        .filter((w) => w !== null);

      return invalidWords && invalidWords.length > 0
        ? { "restrictedWords": invalidWords.join(", ") }
        : null;
    };
  }

  getRestrictedWordsErrorCSSClass(controlName: any): boolean {
    if (this.newSessionForm.controls[controlName].errors && this.newSessionForm.controls[controlName].errors.restrictedWords) {
    console.log(this.newSessionForm.controls[controlName])
      return true;
    }
  }
}
