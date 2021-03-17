import { Pipe, PipeTransform } from '@angular/core';
import {Information} from '../interfaces';

@Pipe({
  name: 'searchInfo'
})
export class FilterSearchPipe implements PipeTransform {

  transform(infos: Information[], search = ''): Information[] {
    if (!search.trim())
    {
      return infos;
    }
    return infos.filter(info =>
    {
      return info.firstName.toLowerCase().includes(search.toLowerCase()) || info.lastName.toLowerCase().includes(search.toLowerCase())
    });
  }

}
