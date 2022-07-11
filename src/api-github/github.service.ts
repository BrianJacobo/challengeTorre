import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import csv from 'csv-parser';

@Injectable()
export class GithubService {
  private arrayFiltered: Array<any> = [];

  async getData() {
    const results: Array<any> = [];
    fs.createReadStream('ranking.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results.length);
        results.sort((a, b) => b.stars - a.stars);
        const newResults = results.filter(
          (item) => item.language === 'JavaScript',
        );
        for (let i = 0; i < 2; i++) {
          this.arrayFiltered.push(newResults[i]);
        }
        console.log('=====>', this.arrayFiltered);
        var res = this.arrayFiltered;
      });
    console.log(this.arrayFiltered);
    return res;
  }
}
