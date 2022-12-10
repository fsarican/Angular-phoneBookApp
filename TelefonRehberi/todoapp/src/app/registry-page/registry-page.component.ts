import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import { Registry } from '../Registry';

@Component({
  selector: 'registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.css']
})
export class RegistryPageComponent implements OnInit {

  constructor(private service:DataserviceService){
    this.service.getAll().subscribe(res=>{
    this.regList=res;
  })}
  ngOnInit():void { }

  regList:Registry[]=[];

    updateRegistry(item:Registry,_ad:string,_soyad:string,_num:string)
    {
    item.kisiAd=_ad;
    item.kisiSoyad=_soyad;
    item.kisiNum=_num;
    this.service.updateRegistry(item).subscribe(_res=>{
    alert("kişi güncellendi!!");
    });
  }

addRegistry(item:Registry,_ad:string,_soyad:string,_num:string)
{
  let dt:Registry={id:0,kisiAd:_ad,kisiSoyad:_soyad,kisiNum:_num};
  this.service.AddRegistry(dt).subscribe(res=>{
  dt.id=res['id'];
  this.regList.splice(0,0,dt);
  alert("kişi eklendi!!!");
  });
}

}



