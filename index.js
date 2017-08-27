'use strict';

const exec = require ( 'child_process' ).exec;
const vnu = require ( 'vnu-jar' );

// Print path to vnu.jar 
console.log ( vnu );

// Work with vnu.jar 
// for example get vnu.jar version 
exec ( `java -jar ${vnu} --version`, ( error, stdout ) => {

   if ( error ) {
       console.error ( `exec error: ${error}` );
       return;
   }

   console.log ( stdout );

});