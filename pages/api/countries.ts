// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DatabaseController from '../../DatabaseController';
import { ICountry } from '../../interfaces';

type Data = {
  countries: ICountry[]
}

const databseControlller = new DatabaseController()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let countries = await databseControlller.getAllCountries()
  res.status(200).json({countries: countries })
}
