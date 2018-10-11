import { Component, OnInit } from '@angular/core';
import {HttpService } from './../http.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';



@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  battlin: boolean = false;
switch: boolean = false
switch1: boolean = true;
switch2: boolean =true;
guser1: any;
guser2: any;
user1: any;
user2: any;
rankings: any[]= [] 
ranking: {};
sortable: any[] =[] ;
first: {any}
second: {any}



  constructor(private _httpService: HttpService, private _router: Router ) { }
  
  ngOnInit() {
    this.guser1 ={ name: ""}
    this.guser2 = {name: ""}
  }

  // ready2(){
  //   console.log('user2 ', this.guser2)
  //   let observable = this._httpService.apiget(this.guser2)
  //   observable.subscribe(data =>{
  //     console.log('data back for user 2 from api', data)
  //   })
  // }

  retrieveGithubUser(data, formNum){
    let obs = this._httpService.retrieveGithubUser(data.name);
   
    obs.subscribe(response => {
      if(formNum === 1){
        this.switch1 = false;
        var score = response['followers'] + response['public_repos'] * 12;
      
        this.rankings.push({name: response['name'], score: score})
        var info = this.rankings
        let obs = this._httpService.create(info);
        obs.subscribe(data => {
          console.log('data back form the data base', data)

        })
        // console.log('rankings', this.rankings[0])
      } else if( formNum === 2){
        this.switch2 = false;
        
        var score = response['followers'] + response['public_repos'] * 12;
        this.rankings.push({name: response['name'], score: score})
        var info = this.rankings
        let obs = this._httpService.create(info);
        obs.subscribe(data => {
          console.log('user2 data back ', data)
        })
      }if(this.switch1 === this.switch2){
          this.switch = true;
      }
    })
  }
  
        // if(this.rankings[0].score < score){
        //   this.rankings.splice(0,0, score)
        // }
        // for(let i =1; i < this.rankings.length; ++){
        //   if(this.rankings[i].score < score ){
        //     this.rankings.splice(i-1, 0, score)
        //   }
        // }
      
        // this.rankings.push(response),
        // console.log('testing to see rankings', this.rankings)
        

 reset(){
   this._router.navigate(['/'])
 }
  startB(){
    
    this.battlin = true;

    console.log("sliced", this.rankings)
    for (var git in this.rankings){
      this.sortable.push([git, this.rankings[git]])
    }
    this.sortable.sort((a, b) => {
      return b[1] - a[1]

    })
    console.log('sorting ', this.sortable)
    this.first = this.sortable[0][1]
    this.second = this.sortable[1][1]
  
    


    // console.log('sortin something?', this.rankings, this.sortable)
  }
}
