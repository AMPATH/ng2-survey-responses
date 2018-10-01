import { Component, OnInit } from '@angular/core';
import { QuizAswerService } from '../services/quiz-aswer.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-responses',
  templateUrl: './general-responses.component.html',
  styleUrls: ['./general-responses.component.css']
})
export class GeneralResponsesComponent implements OnInit {
  programControl = new FormControl('', [Validators.required]);
  departments = [];
  programs = [];
  selectedId;
  data = [];
  questionObject = [];
  page: number = 1;

  allData: any[] = [];
  questions: any[] = [];

  constructor(private myService: QuizAswerService) { }

  ngOnInit() {
    this.myService.getPrograms().subscribe(
      (response) => {
        this.programs = response.json();
      }
    );
  }

  onChange(program) {
    this.questionObject = [];
    this.selectedId = program;
    this.myService.getQuestions(this.selectedId).subscribe((data) => {
      this.questions = data.json();
      this.questionObject = this.getQuestionObject(this.questions, this.questionObject);

      this.myService.getQuizAns(this.selectedId).subscribe((data) => {
        this.allData = data.json();
        this.questionObject = this.getAnswersObject(this.questionObject, this.allData);
      })
    })

  }
  getQuestionObject(questions, questionObject): any {
    for (var q of questions) {
      let dObject = {};
      dObject['question'] = q;
      dObject['answers'] = [];
      questionObject.push(dObject);
    }
    return questionObject;
  }

  getAnswersObject(quizObj, ansObj) {
    for (var q of quizObj) {
      for (var qa of ansObj) {
        if (q.question.question == qa.question) {
          q['question_text'] = qa.question_text;
          q.answers.push({ answer: qa.answer, count: qa.count })
        }
      }
    }
    return quizObj;
  }

  onScrollDown() {
    console.log('scrolled down!!');
  }
 
  onScrollUp() {
    console.log('scrolled up!!');
  }
}
