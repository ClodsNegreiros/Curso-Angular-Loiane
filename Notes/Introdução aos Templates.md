> Dentro do código html será a parte view, será o template a ser renderizado no browser que o usuário poderá ver e interagir.

> O angular utiliza um conceito de Web Components, basicamente transforma o seletor declarado no component.ts e o transforma em uma tag html.

> Nós podemos inicializar uma variável tanto no construtor "constructor() {this.nomePortal = ''}" ou, podemos apenas inicializar colocando um valor inicial, "nomePortal: string = '';"

- Para passarmos um conteúdo de uma variável que existe apenas no componente.ts e passar para o html basta fazer uma interpolação. Para utilizarmos a interpolação iremos abrir e fechar duas chaves.

> Para fazermos algo que teriamos que fazer "trabalho braçal", basta também utilizarmos o poder do template, e para isso o Angular possui as diretivas, um bom exemplo é ngFor;

- Ex: 
'''
<ul>
  <li *ngFor="let curso of cursos">
  {{ curso }}
  </li>
</ul>

Uma tradução do código que foi feito acima:
for (let i = 0; i< this.cursos.lenght; i++) {
  let curso = this.cursos[i]
}
'''

> Quando criamos o nosso componente através do angular cli ele já traz um leque de componentes prontos para começarmos, são eles:

- componente.css = estilização;
- componente.html = estrutura;
- componente.spec.ts = testes unitários da classes específica;
- componente.ts = typescript;

> É uma boa prática, deixar que o template inline, ou seja, declarado dentro do prórpio componente, caso ele tenha até no máximo 3 linhas, não tendo necessidade de deixar um componente separado para html, ex:

- @Component({ selector: 'meu-primeiro-component', template: `<p>Meu primeiro component com Angular!</p>`})

> Caso ele possua mais de 3 linhas, utilizaremos a referência para aquele arquivo:

- - @Component({ selector: 'meu-primeiro-component', templateUrl: './meu-primeir-component.html'})


