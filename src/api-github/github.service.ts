import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import csv from 'csv-parser';

@Injectable()
export class GithubService {
  private arrayFiltered: Array<any> = [];

  async getData(topNumber: number, language: string) {
    console.log(typeof language);
    const results: Array<any> = [];
    const respuesta = await fs
      .createReadStream('ranking.csv', 'utf8')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results.length);
        results.sort((a, b) => b.stars - a.stars);
        const newResults = results.filter(
          (item) => item.language === 'JavaScript',
        );
        for (let i = 0; i < topNumber; i++) {
          this.arrayFiltered.push(newResults[i]);
        }
        console.log(this.arrayFiltered);
        return this.arrayFiltered;
      });
    // console.log(this.arrayFiltered);
    return respuesta;
  }
}
