. Documentação: Angular.io;

. Parceria Google + Microsoft;

. Open Source (Código no Github);

. Não é continuação da versão 1, foi reescrito;

. Uso de padrões web e Web Components

> Blocos Principais:

1- Componentes;
2- Diretivas;
3- Roteamento;
4- Serviços;
5- Template;
6- Metadata;
7- Data Binding;
8- Injeção de dependência.

1:
. Ecanpsula:
. Metadata: processamento das calsses;
. Dado a ser mostrado na tela (Data Binding);
. Comportamento da VIEW;

. Tudo que temos na aplicação é um componente, e temos o componente Raiz (Root), mas qual o benefício de "tudo" ser um componente?Como tudo é bem dividido cada um tendo a sua própria parte os testes serão mais fáceis.

. É uma boa prática não escrever código de lógica dentro do nosso componente, então por isso poderíamos criar um serviço. E ele também poderia ser injetado em outras classes;

2:
. É responsável por modificar elementos DOM e/ou seu comportamento;
. Temos também diretivas que são responsáveis diretamente por mexer com o DOM

3:
. No angular temos também o conceito de SPA, o single page application, e para isso temos o router, o responsável pela navegação;

