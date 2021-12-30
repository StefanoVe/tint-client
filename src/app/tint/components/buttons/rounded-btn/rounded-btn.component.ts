import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rounded-btn',
  templateUrl: './rounded-btn.component.html',
  styleUrls: ['./rounded-btn.component.scss'],
})
export class RoundedBtnComponent implements OnInit {
  @Input() color!: string;
  @Input() value!: any;
  @Input() textColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
