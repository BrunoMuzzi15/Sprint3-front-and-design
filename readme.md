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

## Onde e como a IA foi utilizada no projeto

A IA (Claude, da Anthropic) foi utilizada para apoiar a migração da Landing
Page estática da Sprint 03 (HTML + Tailwind) para uma aplicação React
componentizada.

Todo o código gerado foi revisado pela equipe antes da entrega.

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

## Link do repositório Git

`<colar aqui o link do repositório após o push>`

## Link do Deploy na Vercel

`<colar aqui o link gerado após o deploy>`

### Como fazer o deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
directory: `dist` (a Vercel geralmente detecta isso automaticamente).
4. Finalize o deploy e copie o link gerado para colar acima.

## Integrantes

Ver arquivo INTEGRANTES.TXT
