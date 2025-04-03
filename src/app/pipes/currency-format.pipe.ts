import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatPipe'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }

    // Format the number using Intl.NumberFormat for Indonesian locale (id-ID)
    const numberFormatter = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    // Format the value to get the currency style
    let formattedValue = numberFormatter.format(value);

    // Add 'Rp.' and replace commas with dots for thousands separator, and commas for decimals
    formattedValue = 'Rp. ' + formattedValue.replace(',', '.');

    return formattedValue;
  }
}
