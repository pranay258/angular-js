import {  Component } from '@angular/core';




@Component({
    selector:'courses',
    template:`
   {{ text|summary:4 }}

   
    
    `
})
export class CoursesComponent{
  
  text = ` superman`
  

}