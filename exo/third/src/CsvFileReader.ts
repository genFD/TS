import fs from 'fs';
import { MatchResults } from './MatchResults';
import { stringToDate } from './utils';
type MatchData = [Date, string, string, number, number, MatchResults, string];
export class CsvFileReader {
  fileName: string;
  data: MatchData[] = [];
  constructor(fileName: string) {
    this.fileName = fileName;
  }
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [
          stringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6],
        ];
      });
  }
}
