import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    // params
    this.route.params.subscribe((res: Params) => {
      console.log(res['id'])
    })

    // query_params
    this.route.queryParams.subscribe((res) => {
      console.log(res)
    })

    // navigate
    setTimeout(() => {
      this.router.navigate(['/user', '3', 'edit'], { queryParams: { allowEdit: 2 } })
    }, 5000)

  }

}