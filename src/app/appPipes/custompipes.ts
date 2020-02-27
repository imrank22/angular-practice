import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'mypipe'
})

export class CustomPipes implements PipeTransform{
    
    transform( value:any, parameter: any ){

        //parameter is any value you take from the pipe as "pipename : " from html

        console.log(value);
        return "Leo Messi"
    }

}