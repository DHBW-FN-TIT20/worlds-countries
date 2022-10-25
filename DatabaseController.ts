import mysql from 'serverless-mysql';
import { ICountry } from './interfaces';
export default class DatabaseController {

  public async getAllCountries(): Promise<ICountry[]> {
    console.log("getAllCountries: BackendController.ts")

    const db = mysql({
      config: {
        host: "localhost",
        user: "user",
        password: "user1234",
        database: "laenderdb",
      },
    });
    const result: any = await db.query("SELECT * FROM laender");
    //convert all results to ICountry
    var countries: ICountry[] = [];
    for (var i = 0; i < result?.length || 0; i++) {
      countries.push({
        name: result[i].Name,
        area: result[i].Area,
        population: result[i].Population,
        leader: result[i].Leader,
        phone: result[i].Phone,
        id: result[i].LaenderId
      });
    }
    return countries;
  }
}