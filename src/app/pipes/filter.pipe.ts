import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string ): any {

    if(texto === ''){
      return arreglo;
    }
    return arreglo.filter( item => {
        return item.eye_color.toLowerCase().includes(texto.toLowerCase()) ||  item.gender.toLowerCase().includes(texto.toLowerCase());
    });

  }

}
