# JOVI - Luz Dinâmica (Sprint 4)

Evolução do projeto da Sprint 03 (Front-End Design), agora integrado ao **React**,
mantendo a mesma proposta da Challenge: a funcionalidade *Luz Dinâmica*, uma
solução de iluminação inteligente para fotografias em smartphones JOVI.

Entrega conjunta das disciplinas **Front-End Design** e **Web Development**.

## Tecnologias utilizadas

- React 18
- Vite
- React Router DOM (rotas públicas e privadas)
- Tailwind CSS v4
- Consumo de API pública de terceiros: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Como instalar as dependências

Com o Node.js instalado, na raiz do projeto rode:

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

O terminal exibirá o endereço local (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Back-end / servidores

O projeto não possui back-end próprio. Os dados exibidos na área privada
(`/dashboard`) são consumidos diretamente do navegador através da API pública
gratuita JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`), então
não é necessário subir nenhum servidor adicional — basta ter conexão com a
internet ao rodar o projeto.


## Usuário e senha para teste (rota privada)

A rota `/dashboard` é protegida e exige login (autenticação simulada, sem
back-end). Para testar, utilize:

- E-mail: `admin@jovi.com`
- Senha:`jovi123`

## Estrutura de rotas

 Rota           Tipo     Descrição                                       

 `/`            Pública - Landing page (Sprint 03 evoluída)                  
 `/login`       Pública - Tela de login (mock)                               
 `/dashboard`   Privada - Lista de usuários consumida da API JSONPlaceholder 

## Link do repositorio git

`https://github.com/BrunoMuzzi15/Sprint3-front-and-design.git`

## Link do Deploy na Vercel

`https://sprint3-front-and-design.vercel.app/`






