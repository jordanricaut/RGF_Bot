const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async (client) => {
  (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async (cmdFile) => {
    const cmd = require(cmdFile);

    if(!cmd.name || !cmd.description) return console.log(`------\n🔴 Commande : Pas de nom ou de description)\nFichier => ${cmdFile}\n-------`);
 

    client.commands.set(cmd.name, cmd);

    console.log(`🟢 Commande : ${cmd.name}`);
  });
};
