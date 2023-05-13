import { Component, OnInit } from '@angular/core';
import { from, of, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // of(2, 4, 6, 8).subscribe({
    //   next: (item) => {
    //     console.log(item);
    //   },
    // });

    from([1, 2, 3, 4, 5]).subscribe({
      next: (item) => console.log(item),
      error: (error) => console.log(error),
      complete: () => console.log('Observer is complete!'),
    });

    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .pipe(
        map((item) => item * 3),
        tap((item) => console.log(`tap is called: item : ${item}`)),
        take(3)
      )
      .subscribe((item) => console.log('subscribe is called with ' + item));
  }

  title = 'dev_project_5.1';
}
