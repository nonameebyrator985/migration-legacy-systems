const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .argument('[chemin]', 'chemin du projet à analyser')
  .action((chemin) => {
    console.log(`Analyse du projet: ${chemin}`);
    // Appeler des fonctions d'analyse et de génération de rapport ici
  });

program.parse(process.argv);