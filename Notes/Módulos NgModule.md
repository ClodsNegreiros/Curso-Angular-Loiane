> Metadados do NgModule:
- Declarations: Dentro do declarations iremos listar todos os componentes, diretivas e pipes que queremos utilizar nesse módulo;

- Imports: Basicamente outros módulos que queremos utilizar dentro do módulo em si, ou então dentro dos itens que estão no declarations;

- Providers: Serão todos os serviços que iremos deixar disponível para todos os componentes listados no módulo

> Podemos também utilizar features modules:
- Que serão os módulos locais para podermos organizar melhor os módulos;

> Criação do módulo no angular CLI:
- ng generate module nome_do_modulo ou
- ng g m nome_do_modulo

> Uma boa prática para importação de módulos:
- Deixar os imports de componentes abaixo dos imports "principais";

- Uma exentão muito boa também para isso é o auto import

> Metadado export:
- O export serve para falarmos para o angular qual o componente inserido na declarations que queremos export para outros módulos;

- 
