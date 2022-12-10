import { Pipe, PipeTransform } from "@angular/core";
import { Registry } from "../Registry";

@Pipe({
  name:'regFilter'
})

export class RegistryFilterPipe implements PipeTransform{
  transform(regList:Registry[],searchTerm:string):Registry[] {
      if(!regList || !searchTerm) {
        return regList;
      }

      return regList.filter(reg =>
        reg.kisiAd.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
  }
