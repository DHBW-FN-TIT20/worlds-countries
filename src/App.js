import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      columns: [
        { key: 'name', name: 'Name des Landes', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'area', name: 'Fläche', fieldName: 'area', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'population', name: 'Einwohnerzahl', fieldName: 'population', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'leader', name: 'Staatsoberhaupt', fieldName: 'leader', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'phone', name: 'Telefonvorwahl', fieldName: 'phone', minWidth: 100, maxWidth: 200, isResizable: true },
      ],
    }
  }

  componentDidMount() {

    const tempCountries = [
      { name: 'Deutschland', area: '357.022 km²', population: '83.02 Mio.', leader: 'Olaf Scholz', phone: '+49', id: 0 },
      { name: 'Frankreich', area: '643.801 km²', population: '67.02 Mio.', leader: 'Emmanuel Macron', phone: '+33', id: 0 },
      { name: 'Italien', area: '301.338 km²', population: '60.36 Mio.', leader: 'Sergio Mattarella', phone: '+39', id: 0 },
      { name: 'Spanien', area: '505.990 km²', population: '46.94 Mio.', leader: 'Felipe VI', phone: '+34', id: 0 },
      { name: 'Polen', area: '312.679 km²', population: '38.48 Mio.', leader: 'Andrzej Duda', phone: '+48', id: 0 },
      { name: 'Niederlande', area: '41.543 km²', population: '17.28 Mio.', leader: 'Willem-Alexander', phone: '+31', id: 0 },
      { name: 'Belgien', area: '30.528 km²', population: '11.48 Mio.', leader: 'Philippe', phone: '+32', id: 0 },
      { name: 'Österreich', area: '83.879 km²', population: '8.86 Mio.', leader: 'Alexander Van der Bellen', phone: '+43', id: 0 },
      { name: 'Schweiz', area: '41.285 km²', population: '8.57 Mio.', leader: 'Simonetta Sommaruga', phone: '+41', id: 0 },
      { name: 'Tschechien', area: '78.866 km²', population: '10.69 Mio.', leader: 'Zuzana Čaputová', phone: '+420', id: 0 },
      { name: 'Ungarn', area: '93.030 km²', population: '9.77 Mio.', leader: 'János Áder', phone: '+36', id: 0 },
      { name: 'Dänemark', area: '43.094 km²', population: '5.80 Mio.', leader: 'Margrethe II', phone: '+45', id: 0 },
      { name: 'Schweden', area: '449.964 km²', population: '10.23 Mio.', leader: 'Karl XVI Gustav', phone: '+46', id: 0 },
      { name: 'Norwegen', area: '385.252 km²', population: '5.32 Mio.', leader: 'Harald V', phone: '+47', id: 0 },
      { name: 'Slowakei', area: '49.035 km²', population: '5.45 Mio.', leader: 'Zuzana Čaputová', phone: '+421', id: 0 },
      { name: 'Slowenien', area: '20.273 km²', population: '2.08 Mio.', leader: 'Borut Pahor', phone: '+386', id: 0 },
      { name: 'Finnland', area: '338.424 km²', population: '5.52 Mio.', leader: 'Sauli Niinistö', phone: '+358', id: 0 },
      { name: 'Estland', area: '45.227 km²', population: '1.32 Mio.', leader: 'Kersti Kaljulaid', phone: '+372', id: 0 },
      { name: 'Lettland', area: '64.589 km²', population: '1.94 Mio.', leader: 'Raimonds Vējonis', phone: '+371', id: 0 },
      { name: 'Litauen', area: '65.300 km²', population: '2.85 Mio.', leader: 'Gitanas Nausėda', phone: '+370', id: 0 },
      { name: 'Irland', area: '70.273 km²', population: '4.90 Mio.', leader: 'Michael D. Higgins', phone: '+353', id: 0 },
      { name: 'Luxemburg', area: '2.586 km²', population: '0.59 Mio.', leader: 'Xavier Bettel', phone: '+352', id: 0 },
      { name: 'Malta', area: '316 km²', population: '0.44 Mio.', leader: 'George Vella', phone: '+356', id: 0 },
      { name: 'Griechenland', area: '131.957 km²', population: '10.77 Mio.', leader: 'Katerina Sakellaropoulou', phone: '+30', id: 0 },
      { name: 'Portugal', area: '92.391 km²', population: '10.28 Mio.', leader: 'Marcelo Rebelo de Sousa', phone: '+351', id: 0 },
      { name: 'Rumänien', area: '238.391 km²', population: '19.56 Mio.', leader: 'Klaus Iohannis', phone: '+40', id: 0 },
      { name: 'Bulgarien', area: '110.879 km²', population: '7.10 Mio.', leader: 'Rumen Radev', phone: '+359', id: 0 },
      { name: 'Zypern', area: '9.251 km²', population: '1.18 Mio.', leader: 'Nicos Anastasiades', phone: '+357', id: 0 },
      { name: 'Kroatien', area: '56.542 km²', population: '4.08 Mio.', leader: 'Zoran Milanović', phone: '+385', id: 0 },
      { name: 'Albanien', area: '28.748 km²', population: '2.87 Mio.', leader: 'Ilir Meta', phone: '+355', id: 0 },
      { name: 'Mazedonien', area: '25.713 km²', population: '2.08 Mio.', leader: 'Stevo Pendarovski', phone: '+389', id: 0 },
      { name: 'Serbien', area: '88.361 km²', population: '7.06 Mio.', leader: 'Aleksandar Vučić', phone: '+381', id: 0 },
      { name: 'Montenegro', area: '13.812 km²', population: '0.63 Mio.', leader: 'Duka Đukanović', phone: '+382', id: 0 },
      { name: 'Bosnien und Herzegowina', area: '51.197 km²', population: '3.83 Mio.', leader: 'Zoran Tegeltija', phone: '+387', id: 0 },
      { name: 'Moldau', area: '33.846 km²', population: '3.56 Mio.', leader: 'Maia Sandu', phone: '+373', id: 0 },
      { name: 'Ukraine', area: '603.628 km²', population: '42.99 Mio.', leader: 'Volodymyr Zelensky', phone: '+380', id: 0 },
      { name: 'Weißrussland', area: '207.600 km²', population: '9.49 Mio.', leader: 'Sergej Tschernyschewski', phone: '+375', id: 0 },
      { name: 'Russland', area: '17.098.242 km²', population: '144.46 Mio.', leader: 'Wladimir Putin', phone: '+7', id: 0 },
      { name: 'Kasachstan', area: '2.724.900 km²', population: '18.53 Mio.', leader: 'Kassym-Jomart Tokajew', phone: '+7', id: 0 },
      { name: 'Turkmenistan', area: '488.100 km²', population: '5.95 Mio.', leader: 'Gurbanguly Berdimuhamedow', phone: '+993', id: 0 },
      { name: 'Usbekistan', area: '447.400 km²', population: '32.99 Mio.', leader: 'Shavkat Mirziyoyev', phone: '+998', id: 0 },
      { name: 'Tadschikistan', area: '143.100 km²', population: '8.88 Mio.', leader: 'Emomali Rahmon', phone: '+992', id: 0 },
      { name: 'Kirgisistan', area: '198.500 km²', population: '6.02 Mio.', leader: 'Sooronbai Dschusenbajew', phone: '+996', id: 0 },
      { name: 'Aserbaidschan', area: '86.600 km²', population: '9.93 Mio.', leader: 'Ilham Aliyev', phone: '+994', id: 0 },
      { name: 'Armenien', area: '29.800 km²', population: '2.94 Mio.', leader: 'Nikol Paschinjan', phone: '+374', id: 0 },
      { name: 'Georgien', area: '69.700 km²', population: '3.71 Mio.', leader: 'Salome Zourabichwili', phone: '+995', id: 0 },
      { name: 'Mongolei', area: '1.564.116 km²', population: '3.18 Mio.', leader: 'Khaltmaagiin Battulga', phone: '+976', id: 0 },
      { name: 'China', area: '9.596.960 km²', population: '1.40 Mrd.', leader: 'Xi Jinping', phone: '+86', id: 0 },
      { name: 'Indien', area: '3.287.263 km²', population: '1.35 Mrd.', leader: 'Ram Nath Kovind', phone: '+91', id: 0 },
      { name: 'Indonesien', area: '1.904.569 km²', population: '267.07 Mio.', leader: 'Joko Widodo', phone: '+62', id: 0 },
      { name: 'Pakistan', area: '881.913 km²', population: '207.71 Mio.', leader: 'Arif Alvi', phone: '+92', id: 0 },
      { name: 'Bangladesch', area: '147.570 km²', population: '163.04 Mio.', leader: 'Md. Abdul Hamid', phone: '+880', id: 0 },
      { name: 'Japan', area: '377.835 km²', population: '126.47 Mio.', leader: 'Shinzō Abe', phone: '+81', id: 0 },
      { name: 'Thailand', area: '513.120 km²', population: '69.63 Mio.', leader: 'Prayut Chan-o-cha', phone: '+66', id: 0 },
      { name: 'Vietnam', area: '331.212 km²', population: '95.54 Mio.', leader: 'Nguyễn Phú Trọng', phone: '+84', id: 0 },
      { name: 'Philippinen', area: '300.000 km²', population: '106.52 Mio.', leader: 'Rodrigo Duterte', phone: '+63', id: 0 },
      { name: 'Kambodscha', area: '181.035 km²', population: '16.18 Mio.', leader: 'Samdech Techo Hun Sen', phone: '+855', id: 0 },
      { name: 'Laos', area: '236.800 km²', population: '6.86 Mio.', leader: 'Bounnhang Vorachith', phone: '+856', id: 0 },
      { name: 'Myanmar', area: '676.578 km²', population: '53.13 Mio.', leader: 'Win Myint', phone: '+95', id: 0 },
      { name: 'Singapur', area: '719 km²', population: '5.64 Mio.', leader: 'Halimah Yacob', phone: '+65', id: 0 },
      { name: 'Malaysia', area: '329.750 km²', population: '31.17 Mio.', leader: 'Mahathir Mohamad', phone: '+60', id: 0 },
      { name: 'Brunei', area: '5.765 km²', population: '0.43 Mio.', leader: 'Haji Hassanal Bolkiah', phone: '+673', id: 0 },
      { name: 'Nordkorea', area: '120.540 km²', population: '25.55 Mio.', leader: 'Kim Jong-un', phone: '+850', id: 0 },
      { name: 'Südkorea', area: '100.210 km²', population: '51.47 Mio.', leader: 'Moon Jae-in', phone: '+82', id: 0 },
      { name: 'Taiwan', area: '35.980 km²', population: '23.77 Mio.', leader: 'Tsai Ing-wen', phone: '+886', id: 0 },
      { name: 'Hongkong', area: '1.104 km²', population: '7.45 Mio.', leader: 'Carrie Lam', phone: '+852', id: 0 },
      { name: 'Macao', area: '30 km²', population: '0.64 Mio.', leader: 'Ho Iat-seng', phone: '+853', id: 0 },
      { name: 'Sri Lanka', area: '65.610 km²', population: '21.89 Mio.', leader: 'Maithripala Sirisena', phone: '+94', id: 0 },
      { name: 'Nepal', area: '147.181 km²', population: '28.09 Mio.', leader: 'Bidhya Devi Bhandari', phone: '+977', id: 0 },
      { name: 'Afghanistan', area: '652.230 km²', population: '36.29 Mio.', leader: 'Ashraf Ghani', phone: '+93', id: 0 },
      { name: 'Bhutan', area: '38.394 km²', population: '0.75 Mio.', leader: 'Jigme Khesar Namgyel Wangchuck', phone: '+975', id: 0 },
      { name: 'Myanmar', area: '676.578 km²', population: '53.13 Mio.', leader: 'Win Myint', phone: '+95', id: 0 },
      { name: 'Maldiven', area: '298 km²', population: '0.43 Mio.', leader: 'Abdulla Yameen Abdul Gayoom', phone: '+960', id: 0 },
      { name: 'Sri Lanka', area: '65.610 km²', population: '21.89 Mio.', leader: 'Maithripala Sirisena', phone: '+94', id: 0 },
      { name: 'Nepal', area: '147.181 km²', population: '28.09 Mio.', leader: 'Bidhya Devi Bhandari', phone: '+977', id: 0 },
      { name: 'USA', area: '9.833.517 km²', population: '327.2 Mio.', leader: 'Joe Biden', phone: '+1', id: 0 },
      { name: 'Kanada', area: '9.984.670 km²', population: '37.59 Mio.', leader: 'Justin Trudeau', phone: '+1', id: 0 },
      { name: 'Mexiko', area: '1.964.375 km²', population: '127.3 Mio.', leader: 'Andrés Manuel López Obrador', phone: '+52', id: 0 },
      { name: 'Brasilien', area: '8.515.767 km²', population: '209.3 Mio.', leader: 'Jair Bolsonaro', phone: '+55', id: 0 },
      { name: 'Argentinien', area: '2.780.400 km²', population: '44.94 Mio.', leader: 'Alberto Fernández', phone: '+54', id: 0 },
      { name: 'Kolumbien', area: '1.141.748 km²', population: '49.82 Mio.', leader: 'Iván Duque', phone: '+57', id: 0 },
      { name: 'Peru', area: '1.285.216 km²', population: '32.84 Mio.', leader: 'Francisco Sagasti', phone: '+51', id: 0 },
      { name: 'Venezuela', area: '916.445 km²', population: '28.49 Mio.', leader: 'Nicolás Maduro', phone: '+58', id: 0 },
      { name: 'Chile', area: '756.096 km²', population: '18.29 Mio.', leader: 'Sebastián Piñera', phone: '+56', id: 0 },
      { name: 'Ecuador', area: '283.561 km²', population: '17.31 Mio.', leader: 'Lenín Moreno', phone: '+593', id: 0 },
      { name: 'Bolivien', area: '1.098.581 km²', population: '11.38 Mio.', leader: 'Luis Arce', phone: '+591', id: 0 },
      { name: 'Paraguay', area: '406.752 km²', population: '7.02 Mio.', leader: 'Mario Abdo Benítez', phone: '+595', id: 0 },
      { name: 'Uruguay', area: '176.215 km²', population: '3.46 Mio.', leader: 'Luis Lacalle Pou', phone: '+598', id: 0 },
      { name: 'Kuba', area: '109.884 km²', population: '11.28 Mio.', leader: 'Miguel Díaz-Canel', phone: '+53', id: 0 },
      { name: 'Dominikanische Republik', area: '48.730 km²', population: '10.71 Mio.', leader: 'Luis Abinader', phone: '+1', id: 0 },
      { name: 'Haiti', area: '27.750 km²', population: '11.02 Mio.', leader: 'Jovenel Moïse', phone: '+509', id: 0 },
      { name: 'Jamaika', area: '10.991 km²', population: '2.97 Mio.', leader: 'Andrew Holness', phone: '+1', id: 0 },
      { name: 'Trinidad und Tobago', area: '5.128 km²', population: '1.39 Mio.', leader: 'Kamla Persad-Bissessar', phone: '+1', id: 0 },
      { name: 'Barbados', area: '431 km²', population: '0.28 Mio.', leader: 'Mia Amor Mottley', phone: '+1', id: 0 },
      { name: 'Saint Lucia', area: '616 km²', population: '0.18 Mio.', leader: 'Allen Chastanet', phone: '+1', id: 0 },
      { name: 'Saint Vincent und die Grenadinen', area: '389 km²', population: '0.11 Mio.', leader: 'Ralph Gonsalves', phone: '+1', id: 0 },
      { name: 'Grenada', area: '344 km²', population: '0.11 Mio.', leader: 'Keith Mitchell', phone: '+1', id: 0 },
      { name: 'Dominica', area: '751 km²', population: '0.07 Mio.', leader: 'Rodney Charles', phone: '+1', id: 0 },
      { name: 'Antigua und Barbuda', area: '442 km²', population: '0.1 Mio.', leader: 'Gail Rigobert', phone: '+1', id: 0 },
      { name: 'Saint Kitts und Nevis', area: '261 km²', population: '0.05 Mio.', leader: 'Mark Brantley', phone: '+1', id: 0 },
      { name: 'Bahamas', area: '13.878 km²', population: '0.39 Mio.', leader: 'Hubert Minnis', phone: '+1', id: 0 },
      { name: 'Belize', area: '22.966 km²', population: '0.39 Mio.', leader: 'Dean Barrow', phone: '+501', id: 0 },
      { name: 'Costa Rica', area: '51.100 km²', population: '5.02 Mio.', leader: 'Carlos Alvarado Quesada', phone: '+506', id: 0 },
      { name: 'Panama', area: '75.517 km²', population: '4.28 Mio.', leader: 'Nicolás Maduro', phone: '+507', id: 0 },
      { name: 'Guatemala', area: '108.889 km²', population: '17.02 Mio.', leader: 'Alejandro Giammattei', phone: '+502', id: 0 },
      { name: 'El Salvador', area: '21.041 km²', population: '6.43 Mio.', leader: 'Nayib Bukele', phone: '+503', id: 0 },
      { name: 'Honduras', area: '112.492 km²', population: '9.62 Mio.', leader: 'Juan Orlando Hernández', phone: '+504', id: 0 },
      { name: 'Nicaragua', area: '129.494 km²', population: '6.49 Mio.', leader: 'Daniel Ortega', phone: '+505', id: 0 },
      { name: 'Nigeria', area: '923.768 km²', population: '206.1 Mio.', leader: 'Muhammadu Buhari', phone: '+234', id: 0 },
      { name: 'Ägypten', area: '1.001.450 km²', population: '100.8 Mio.', leader: 'Abdel Fattah el-Sisi', phone: '+20', id: 0 },
      { name: 'Südafrika', area: '1.221.037 km²', population: '59.3 Mio.', leader: 'Cyril Ramaphosa', phone: '+27', id: 0 },
      { name: 'Demokratische Republik Kongo', area: '2.344.858 km²', population: '84.34 Mio.', leader: 'Felix Tshisekedi', phone: '+243', id: 0 },
      { name: 'Tansania', area: '945.087 km²', population: '59.42 Mio.', leader: 'John Pombe Magufuli', phone: '+255', id: 0 },
      { name: 'Kenia', area: '580.367 km²', population: '53.77 Mio.', leader: 'Uhuru Kenyatta', phone: '+254', id: 0 },
      { name: 'Uganda', area: '241.038 km²', population: '45.66 Mio.', leader: 'Yoweri Museveni', phone: '+256', id: 0 },
      { name: 'Algerien', area: '2.381.741 km²', population: '43.38 Mio.', leader: 'Abdelmadjid Tebboune', phone: '+213', id: 0 },
      { name: 'Sudan', area: '1.886.068 km²', population: '43.13 Mio.', leader: 'Abdalla Hamdok', phone: '+249', id: 0 },
      { name: 'Äthiopien', area: '1.104.300 km²', population: '114.96 Mio.', leader: 'Abiy Ahmed', phone: '+251', id: 0 },
      { name: 'Sambia', area: '752.614 km²', population: '18.07 Mio.', leader: 'Edgar Lungu', phone: '+260', id: 0 },
      { name: 'Sudan', area: '1.886.068 km²', population: '43.13 Mio.', leader: 'Abdalla Hamdok', phone: '+249', id: 0 },
      { name: 'Äthiopien', area: '1.104.300 km²', population: '114.96 Mio.', leader: 'Abiy Ahmed', phone: '+251', id: 0 },
      { name: 'Sambia', area: '752.614 km²', population: '18.07 Mio.', leader: 'Edgar Lungu', phone: '+260', id: 0 },
      { name: 'Sudan', area: '1.886.068 km²', population: '43.13 Mio.', leader: 'Abdalla Hamdok', phone: '+249', id: 0 },
      { name: 'Äthiopien', area: '1.104.300 km²', population: '114.96 Mio.', leader: 'Abiy Ahmed', phone: '+251', id: 0 },
      { name: 'Sambia', area: '752.614 km²', population: '18.07 Mio.', leader: 'Edgar Lungu', phone: '+260', id: 0 },
    ];

    this.setState({ countries: tempCountries })

  }
  render() {
    return (
      <div className='App'>
        <header className='AppHeader'>
          <title>Länder der Welt</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </header>
        <h1>
          Die Länder der Welt
        </h1>
        <table>
          <thead>
            <tr>
              {this.state.columns.map((column) => (
                <th key={column.key}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.countries.map((country, index) => (
              <tr key={index}>
                {this.state.columns.map((column) => (
                  <td key={column.key}>{country[column.fieldName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}