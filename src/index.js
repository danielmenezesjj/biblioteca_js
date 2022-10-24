import fs from 'fs'
import chalk from 'chalk';


function extraiLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; 
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura => ({[captura[1]]: [captura[2]]}))
    return resultados
}

[
    {titulo: URL}
]




function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Caminho não expecifico'));
}


//async/await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(extraiLink(texto));

    }catch(erro){
        trataErro(erro)
    }

}







export default pegaArquivo