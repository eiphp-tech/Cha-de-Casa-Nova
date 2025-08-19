/**
 * Esta função importa dinamicamente todas as imagens da pasta "./presentes".
 * Ela cria um catálogo de imagens onde a chave é o nome do arquivo (sem a extensão)
 * e o valor é o módulo da imagem importada.
 *
 * Utiliza `import.meta.glob` do Vite para encontrar todos os arquivos que correspondem
 * ao padrão, importando-os de forma "eager" (imediata).
 */
function createImageCatalog() {
  // O padrão './presentes/*.png' busca por todos os arquivos .png na pasta adjacente 'presentes'.
  // { eager: true } garante que os módulos sejam importados imediatamente.
  const imageModules = import.meta.glob("./presentes/*.png", { eager: true })

  const imageCatalog = Object.entries(imageModules).reduce(
    (acc, [path, module]) => {
      // Extrai o nome do arquivo do caminho (ex: './presentes/batedeira.png' -> 'batedeira.png')
      const fileName = path.split("/").pop()

      // Remove a extensão do arquivo para criar uma chave limpa (ex: 'batedeira.png' -> 'batedeira')
      // A expressão regular /\.\w+$/ remove o último ponto e a extensão que o segue.
      const key = fileName.replace(/\.\w+$/, "")

      // Atribui o módulo da imagem (o caminho da imagem) à chave correspondente no nosso catálogo.
      // A propriedade 'default' geralmente contém o caminho da imagem processada pelo bundler.
      acc[key] = module.default

      return acc
    },
    {}
  )

  return imageCatalog
}

const imageCatalog = createImageCatalog()

export default imageCatalog
