// "?" means optional property (typescript demands this to be defined)
//alternative is: "id:number | undefined"
export class Person {
  id?:number 
  name?:string

  constructor() {
  }
}
