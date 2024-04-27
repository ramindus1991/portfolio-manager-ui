import { Position } from "./position";

export interface SummaryPage{
 customerName?: string | undefined;
 portfolioNumber?:  number;
 portfolioValue?: number;
 currentPerformance?: string;

 investmentStrategy?: string;
 positions?: Position[];

}