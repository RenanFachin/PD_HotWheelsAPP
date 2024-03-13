# HotWheels - CRUD
Desenvolvimento de uma aplicação utilizando reactJS, tailwindCSS e typescript para a cadeira de Desenvolvimento de sistemas front-end da PUC-RS.

## Framework (ViteJS)
O framework utilizado para elaboração do projeto foi o vitejs, que é um framework que possui rápida atualização, utiliza abordagem de carregamento de módulos nativa do ECMAScript, possui o HMR(Hot Module Replacement), permitindo a atualização instantânea durante o desenvolvimento e por fornecer um projeto com configurações mínimas a serem realizadas para dar inicio ao projeto.

## Estilização (Tailwindcss)
A escolha pelo tailwindcss para estilização do projeto se deu pela produtividade, customização flexível, manutenção simples, **consistência visual** e a fácil integração com react.
Definição da paleta de cores: https://coolors.co/palette/2b2d42-8d99ae-edf2f4-ef233c-d90429

## Rotas
Para criação de das rotas da aplicação foi utilizado a biblioteca react-router-dom para melhor manipulação das rotas.
As páginas da aplicação se encontram dentro de ./src/pages/app
Todas páginas da aplicação foram envolvidas por um layout, que é um padrão que será utilizado para todas as rotas da aplicação.
Todas estas rotas fazem uso de um layout para aplicação, que é apenas o menu de navegação da página.

```bash
Home: http://localhost:5174/
About: http://localhost:5174/about
Cars: http://localhost:5174/cars
AddCars: http://localhost:5174/add-cars
```

## Melhorias no SEO da página
Utilizando a lib react-helmet-async que permite a manipulação das META tags de cada página.

## Validação no formulário
As validações impostas neste projeto foram criadas a partir das biblitoecas react-hook-form e zod. Ambas fornecem funcionalidades que garantem a tipagem correta dos dados e também a validação dos campos durante o submit do form.


## Componentes
- [x] Button - Para elaboração do componente de button foi utilizando um pattern de criação de componentes no qual nos possibilita a personalização do Button no local em que ele será utilizado. O Button possui dois children Button.Text e Button.Icon, com essa composição podemos implementar um botão sem ícone, um botão com ícone na direita e texto na esquerda ou um botão com ícone na esquerda e texto no direita.
Outra função importante deste componente é a criação de variantes com o uso da lib tailwind-variants, no qual conseguimos, na hora de utilizar o componente, definir qual a estilização a ser utilizada.

- [x] CarDetail - Este componente é onde os detalhes do carro são mostrados. Ele recebe 2 props, **car** que é o objeto com as informações do carro e deve possuir a seguinte configuração: Car {brand: string, color: string, id: number, name: string, year: string} e também uma função **handleDeleteCar** no qual é disparada quando é clicado em deletar o registro. Para elaboração deste componente, foi utilizado o componente de Dialog da lib Radix-UI, este Dialog nos permite configurar totalmente a forma de visualização de um Dialog na página. Este Dialog é chamado quando é clicado no botão de visualização de detalhes do carro.

- [x] CarForm - Este componente possui TODA a lógica do formulário de inserção de dados. Para validação dos dados é utilizado as biblitecas **zod** e **react-hook-form**. Este componente recebe como propriedade a função handleAddCar para disparar uma inserção de dados passando os valores que forem adicionados pelo submit do form.

- [x] CarList - Componente simples em que é apenas utilizado para criação do layout da visualização da lista de carros. Ele recebe children como propriedade, este children é o CarDetail.

- [x] GithubWidget - Componente de widget que fica na posição absoluta da tela para levar o usuário para o repositório do github do projeto.

- [x] NavLink - Este componente foi criado para possibilitar uma maior flexibilidade na criação do menu de navegação. O componente utiliza o componente **Link** que vem da biblioteca de **react-router-dom** e possibilita a navegação do usuário pelas rotas da aplicação. Para elaboração da estilização deste componente, foi utilizado o conceito de data-attributes que nos permite criar personalizações na estilização com base em alguma situação, neste caso, a situação é a verificação do path(caminho) em que o usuário se encontra dentro da aplicação.

- [x] NavBar - É o componente que engloba os componentes de NavLink, é utilizado para criar um menu interativo com o usuário.

- [x] NotFound - Componente contendo uma estilização básica para mostrar quando o usuário navegar para uma página que não esteja mapeado no arquivo de rotas.

- [x] Task - Componente utilizado para criação da lista de tarefas que é mostrado na tela de /about da aplicação.

## Instalação
Faça o clone do repositório

Instalando as dependências
```bash
npm i
```

Rodando o projeto
```bash
npm run dev
```

Acesse o caminho fornecido pelo prompt de comando
```bash
http://localhost:5174/
```

## Autor

- [Renan Fachin](https://github.com/RenanFachin/)
