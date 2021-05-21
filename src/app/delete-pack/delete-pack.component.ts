import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pack } from '../pack';

@Component({
  selector: 'app-delete-pack',
  templateUrl: './delete-pack.component.html',
  styleUrls: ['./delete-pack.component.css']
})
export class DeletePackComponent implements OnInit {
  pack:Pack=new Pack(0,0,0,'','',[]);
  createdFlag:boolean=false;
  constructor(private formBuilder:FormBuilder,private packClient:HttpClient, router:Router) { }
  

  ngOnInit(): void {
  }

  packForm = this.formBuilder.group(
    {
      id:['',[Validators.required, Validators.min(1)]]
  })

  public packDelInfo(data:any) {
     this.pack=new Pack(0,0,0,'','',[]);
    this.packClient.delete<Pack>("http://localhost:8089/pack/delete/by/id/" + data.id).subscribe(
      (response)=>{this.pack=response}
    );
    this.createdFlag=true;
  }
}
