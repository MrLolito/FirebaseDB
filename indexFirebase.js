import admin from 'firebase-admin';
import firebaseConfig from './databasedeprueba-firebase-adminsdk-znf3w-4658fe2ae9.json' assert {type:"json"} ;
import fs from 'fs';

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL:'https://databasedeprueba.firebaseio.com'
})

const enviroment = async() =>{
  //  let firebaseConfig = await fs.promises.readFile('./databasedeprueba-firebase-adminsdk-znf3w-4658fe2ae9.json', 'utf-8')
   // JSON.parse()
   const database = admin.firestore();
   const query = database.collection('usuarios');

   //CRUD
   //create
   //let doc = query.doc();
   //await doc.create({nombre:"Esteban", dni:34597304})
   
   //read
  /* const snapShot = await query.get();
   console.log(snapShot);
   let docs = snapShot.docs;
   console.log(docs);
   const response = docs.map(doc=>({
    id:doc.id,
    name:doc.data().nombre,
    dni:doc.data().dni
   }))
   console.log(response)
   */

   // GET BY ID 
  //let id = "OzPVR9M7cyJwexYz2zGi";
  //const doc= query.doc(id);
  //const item = await doc.get();
  //const obj = idem.data();
  //console.log(obj);

  //UPDATE
  //let id = "OzPVR9M7cyJwexYz2zGi";
  //const doc = query(id);
  //let item = await doc.update({dni:11111111})
  //console.log(item);

  //DELETE
  let id = "OzPVR9M7cyJwexYz2zGi";
  const doc = query.doc(id);
  let result = await doc.delete();
   
}
enviroment();