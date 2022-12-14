import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { ICountry } from '../interfaces';
import mysql from 'serverless-mysql';

interface IColumn {
  key: string;
  name: string;
  fieldName: string;
  minWidth: number;
  maxWidth: number;
  isResizable: boolean;
}

export interface IProps {
  countries: ICountry[];
}

const columns = [
  { key: 'name', name: 'Name des Landes', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'area', name: 'Fläche', fieldName: 'area', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'population', name: 'Einwohnerzahl', fieldName: 'population', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'leader', name: 'Staatsoberhaupt', fieldName: 'leader', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'phone', name: 'Telefonvorwahl', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
]

const Home: NextPage = ({ countries }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // create state for countries
  const [countriesState, setCountries] = useState<ICountry[]>(countries);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          <u>Länder der Welt</u>
        </h1>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countriesState.map((country, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>{country[column.fieldName as keyof typeof country]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async (context) => {

  var countries: ICountry[] = [];

  const db = mysql({
    config: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: parseInt(process.env.DB_PORT || '3306'),
    },
  });
  const result: any = await db.query("SELECT * FROM laender");

  // convert all results to ICountry
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

  return {
    props: {
      countries: countries,
    },
  };
}

export default Home