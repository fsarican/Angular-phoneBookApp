import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { Registry } from '../Registry';
import { RegistryPageComponent } from '../registry-page/registry-page.component';
import { NONE_TYPE } from '@angular/compiler';
import { getLocaleCurrencyCode } from '@angular/common';

@Component({
  selector: 'kisiler',
  templateUrl: './kisiler.component.html',
  styleUrls: ['./kisiler.component.css']
})
export class KisilerComponent implements OnInit {

  ngOnInit(): void {
    // console.log(this.deleteRegistry);
  }

  searchTerm!: string;
  regList:Registry[]=[];
  result!:boolean;

    constructor(private service:DataserviceService){
       this.service.getAll().subscribe(res=>{
        this.regList=res;
      })}

    getName(name:string)
    {
      this.service.getName(name).subscribe(res=>{
        this.regList=res;
      });
    }

    deleteRegistry(item:Registry)
    {
      this.result=confirm("kişi silinsinmi");
      if(this.result){
      this.service.deleteRegistry(item).subscribe(_res=>{
      let index=this.regList.indexOf(item);
      this.regList.splice(index,1);
       });
      }
      else{

      }

    }

    updateRegistry(item:Registry,_ad:string)
    {
    item.kisiAd=_ad;
    this.service.updateRegistry(item).subscribe(_res=>{
    alert("kişi güncellendi!!");
    });
  }


  isShow=false;
  eventShow(value:boolean):void
  {this.isShow=value;}

}

