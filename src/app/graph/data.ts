import { Injectable } from '@angular/core';

@Injectable()
export class GraphData {
  yearData = [
    { place: 'Chennai', university: 'Anna University', course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Crescent'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Vels'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Alpha'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'SRM'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'VIT'},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Panimalar'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Velammal'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Government', name: 'MGR'},
    { place: 'Chennai', university: 'Anna University', course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'IIT'},
    { place: 'Coimbatore', university: 'Madras University', course: 'Engineering(ENG)', type: 'Government', name: 'MCG'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'ACS Medical college'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Amet University'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Alagappa '},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Anand institute'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Bharathis Womens College'},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'A.M. Jain College '},
    { place: 'Chennai', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Deemed', name: 'C. Kandasami Naidu College for Men'},
    { place: 'Coimbatore', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Chellammal Womens College '},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Dr. Ambedkar Government Arts College'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Ethiraj College for Women'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Govt. Arts College for Men '},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Guru Nanak College'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Loyola College'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Madras Christian College '},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'New College '},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Presidency College'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Queen Marys College'},
    { place: 'Coimbatore', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Stella Maris College for Women'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Womens Christian College'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Anna Adarsh College for Women'},

     { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Sindhi College of Arts and Science'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Sir Theagaraya College'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)',
     type: 'Deemed', name: 'Soka Ikeda Arts and Science College for Women'},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Sri Kanniga Parameswari Arts and Science College for Women'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Sri Muthukumarasamy College'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Government', name: 'St. Josephs College '},
    { place: 'Chennai', university: 'Anna University', course: 'Bachelor of Computer Applications(BCA)',
     type: 'Deemed', name: 'St. Thomas College of Arts and Science'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Engineering(ENG)', type: 'Government', name: 'T.M.G. College of Arts and Science'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'T.S. Narayanasamy College of Arts and Science'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)',
     type: 'Deemed', name: 'Tamilnadu Arts and Science College'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Thirumurugan College of Arts and Science '},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Thiruthangal Nadar College'},
    { place: 'Coimbatore', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Deemed', name: 'Vailakanni Malathy Pannicker College of Arts and Science'},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Valliammal College for Women '},
    { place: 'Chennai', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Deemed', name: 'Vel Sri Ranga Sanku College,'},
    { place: 'Coimbatore', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Aalim Muhammed Salegh College'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'Aarupadai Veedu Institute of Technology'},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Agni College of Technology'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'B.S. Abdur Rahman University '},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Bharath University '},
    { place: 'Coimbatore', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Government', name: 'Chennai Institute of Technology'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Deemed', name: 'Dhanalakshmi College of Engineering'},
    { place: 'Coimbatore', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Easwari Engineering College '},
    { place: 'Chennai', university: 'Madras University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'G.K.M. College of Engineering and Technology'},
    { place: 'Chennai', university: 'Anna University', course: 'Engineering(ENG)', type: 'Deemed', name: 'Hindustan University'},
    { place: 'Coimbatore', university: 'Anna University',
     course: 'Engineering(ENG)', type: 'Government', name: 'Jerusalem College of Engineering'},
    { place: 'Chennai', university: 'Anna University',
     course: 'Bachelor of Computer Applications(BCA)', type: 'Deemed', name: 'K.C.G. College of Technology'},

  ];
  cred = [
    { Name: 'udhaya', Password: '12345678'},
  ];

}
