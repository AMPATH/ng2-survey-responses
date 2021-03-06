import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { tap } from 'rxjs/operators';

const BASEURL = 'https://ngx.ampath.or.ke/patient-feedbackserver/';

@Injectable()
export class QuizAswerService {

  constructor(private http: Http) { }

  getCredentials() {
    const headers = new Headers();
    const credentials = sessionStorage.getItem('auth.credentials');
    headers.append('Authorization', 'Basic ' + credentials);
    return headers;
  }

  getQuestions(programs) {
    return this.http.post(BASEURL + 'getQuestions', programs, {
      headers: this.getCredentials()
    }).pipe(tap());
  }
  getQuizAns(programsQa) {
    return this.http.post(BASEURL + 'getAll', programsQa, {
      headers: this.getCredentials()
    }).pipe(tap());
  }

  getPrograms() {
    return this.http.get(BASEURL + 'getSurveyPrograms', {
      headers: this.getCredentials()
    });
  }

}
