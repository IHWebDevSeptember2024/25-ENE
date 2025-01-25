const bcrypt = require('bcryptjs');
const saltRounds = 10; // añade aleatoriedad a la encriptación, cuanto más alto, más seguro

const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';

const salt = bcrypt.genSaltSync(saltRounds); // aquí generamos esta aleatoriedad

console.log(`Salt => ${salt}`);

const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);
// HASTA AQUÍ SERÍA EL SIGNUP, GUARDAMOS LOS DATOS EN MONGO


// AQUÍ EL USER YA HACE LOGIN, TENEMOS QUE VERIFICAR SI EL PASSWORD ES CORRECTO
const verifyPass1 = bcrypt.compareSync("HelloWorld", hash1);

// plainPassword1 => HelloWorld
// hash 1 => $2a$10$h5Jp1tvT81k2gZw9w/OVT.SnimzEs1HoHNnDGYJY4EdWXrsRIqiQG

const verifyPass2 = bcrypt.compareSync('HelloWorld', hash2);

console.log(`Hash 1: ${hash1}`);
console.log(`Hash 2: ${hash2}`);
console.log('----------------------------------------');
console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);
console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);
