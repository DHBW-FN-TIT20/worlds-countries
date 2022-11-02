export class FrontEndController {
  public async getAllCountries() {
    console.log("getAllCountries: FrontEndController.ts")
    //Get serverurl from environment variable
    const serverUrl = process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL
      : "http://localhost:3000";

    console.log("API URL: " + serverUrl + '/api/countries')
    let response = await fetch(serverUrl + '/api/countries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();
    return data.countries;
  }

}

export default new FrontEndController();