import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import csv from 'csv-parser';
import path from 'path';

@Injectable()
export class GithubService {
  // constructor(private readonly http: HttpService) {}

  async getData() {
    const finalPath = path.join(__dirname, 'files', 'ranking.csv');
    console.log(finalPath);
    const results: Array<any> = [];
    fs.createReadStream(finalPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        results.map((item) => {
          console.log('==>', item.stars);
        });
        // console.log(results);
      });
  }
}
