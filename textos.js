const nombre = 'Juan';
const apellido = 'Pérez';

const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const numLetras = estudiante.replace(/\s/g, '').length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.charAt(apellido.length - 1);

const estudianteSinEspacios = estudiante.replace(/\s/g, '');

const nombreContenido = estudiante.includes(nombre);

const resultado = {
  nombre,
  apellido,
  estudiante,
  estudianteMayus,
  estudianteMinus,
  numLetras,
  primeraLetra,
  ultimaLetra,
  estudianteSinEspacios,
  nombreContenido,
};

console.log(resultado);
