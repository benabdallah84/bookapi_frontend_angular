import { formatDate, getLocaleDateTimeFormat } from "@angular/common";

export class Book {
    
        id!:number;
        title:string = '';
        author:string ='';  
        numberOfPages:number=0;
        publichedAt?:Date | null;   
}
