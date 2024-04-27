import { Position } from "./position";

export interface SummaryPage{
 customerName?: string;
 portfolioNumber?:  number;
 portfolioValue?: number;
 currentPerformance?: string;

 investmentStrategy?: string;
 positions?: Position[];

}