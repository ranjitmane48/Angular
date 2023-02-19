import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
 
  @Input('serverInputElement')
  serverElement: { type: string; name: string; content: string; } | undefined;


  @ViewChild('heading') 
  header: ElementRef | undefined;

  constructor() {
    console.log("constructor is called!");
  }

  ngOnInit() {
    console.log("ngOnInit is called!");
    console.log("Text Content " + this.header?.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called!");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called");
  }

  ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked is called");
  }

  ngAfterViewInit(): void {
     console.log("ngAfterViewInit is called");
     console.log("Text Content " + this.header?.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
     console.log("ngAfterViewChecked is called");
  }

  ngOnDestroy(): void {
     console.log("ngOnDestroy is called");
  }
}
