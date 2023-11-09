import { Component, OnInit } from '@angular/core';
import { ZodSchema, ZodObject, z } from 'zod';
import { HttpClient } from '@angular/common/http';

const ZodString = z.string();
const ZodStringEmail = z.string().email();
const ZodStringLength = z.string().min(1).max(10);
const numberPromise = z.promise(z.number());

// to validate any json schema: https://zod.dev/?id=json-type

const personSchema: ZodSchema<{}> = z.object({
  name: z.string(),
  age: z.number().positive(),
});
@Component({
  selector: 'app-zod-test',
  templateUrl: './zod-test.component.html',
  styleUrls: ['./zod-test.component.css'],
})
export class ZodTestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.testValidation();
    this.validatePerson();
    this.tryPickAndOmit();
  }

  testValidation() {
    // ZodString.parse(123); // throws a runtime error
    // ZodString.parse('123'); // passes, we can use the return value safely

    // ZodString.safeParse(123); // returns an object with success: false and error details
    // ZodString.safeParse('123'); // returns an object with success: true and valid data

    // numberPromise.parse('tuna'); // ZodError: Non-Promise type: string
    // numberPromise.parse(Promise.resolve('tuna'));
    // => Promise<number>

    const test = async () => {
      //await numberPromise.parse(Promise.resolve('tuna')); // ZodError: Non-number type: string
      // await numberPromise.parse(Promise.resolve(3.14));
    };

    test();
  }

  validatePerson(): void {
    const personSchema = z.object({
      name: z.string(),
      age: z.number().positive(),
    });

    //parse throws error when validation fails
    /* safeParse returns an object containing either the successfully 
    parsed data or a ZodError instance containing detailed information about the validation problems*/
    const person = {
      name: 'Test Person',
      age: 30,
    };

    try {
      personSchema.parse(person);
      console.log('Person is valid!');
    } catch (error) {
      console.error('Person validation error:', error);
    }
  }

  tryPickAndOmit() {
    const Recipe = z.object({
      id: z.string(),
      name: z.string(),
      ingredients: z.array(z.string()),
      instructions: z.string(),
    });

    const JustTheName = Recipe.pick({ name: true });
    type JustTheNameType = z.infer<typeof JustTheName>;

    const RecipeWithoutId = Recipe.omit({ id: true });
    type RecipeWithoutIdType = z.infer<typeof RecipeWithoutId>;

    const donut = {
      name: 'Donut',
      ingredients: ['Flour', 'Sugar', 'Cocoa Powder'],
      instructions: '1. Preheat oven',
    };

    const validatedDonutName: JustTheNameType = JustTheName.parse(donut);
    console.log(validatedDonutName);

    const validatedDonutWithoutId: RecipeWithoutIdType =
      RecipeWithoutId.parse(donut);
    console.log(validatedDonutWithoutId);
  }

  validateApiData() {
    const apiDataSchema = z.object({
      age: z.number(),
      name: z.string(),
    });

    this.http
      .get<any>('https://randomuser.me/api')
      .subscribe(({ info, results }) => {
        const data = {
          age: results[0].dob.age,
          name: results[0].name.first,
        };

        const validatedApiData = apiDataSchema.parse(data);
        console.log(validatedApiData);
      });
  }
}
