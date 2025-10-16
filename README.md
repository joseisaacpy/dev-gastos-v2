# DevGasto - Controle suas finanças

Este repositório contém o código-fonte de um **sistema de controle de receitas e despesas**, com **painel administrativo** e **autenticação via Google**.  
O objetivo é facilitar o gerenciamento financeiro de uma empresa ou usuário, permitindo visualizar dados de forma intuitiva e organizada.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — Framework React moderno e performático
- [React](https://react.dev/) — Biblioteca para construção de interfaces interativas
- [PostCSS](https://postcss.org/) — Processamento e otimização de estilos CSS
- [ESLint](https://eslint.org/) — Padronização e qualidade de código
- Google Authentication com Next-Auth — Login seguro com conta Google

---

## ⚙️ Funcionalidades Principais

- ✅ Cadastro e gerenciamento de **receitas e gastos**
- 📊 **Dashboard administrativo** com gráficos e métricas financeiras
- 🔐 **Autenticação via Google** (em desenvolvimento)
- 📁 Organização modular com componentes reutilizáveis
- 📱 Interface responsiva e moderna (em desenvolvimento)

---

## 📂 Estrutura do Projeto

```
public/
    ├── fonts/
        └── Poppins-Regular.ttf
    └── images/
        └── image.png
src/
    ├── app/
        ├── dashboard/
            └── page.jsx
        ├── nova-receita/
            └── page.jsx
        ├── novo-gasto/
            └── page.jsx
        ├── globals.css
        ├── layout.js
        ├── not-found.jsx
        └── page.jsx
    ├── components/
        ├── formCadastro/
            └── index.jsx
        ├── sidebar/
            └── index.jsx
        └── ui/
            ├── avatar.jsx
            ├── button.jsx
            ├── card.jsx
            ├── chart.jsx
            ├── form.jsx
            ├── input.jsx
            ├── label.jsx
            ├── separator.jsx
            ├── sheet.jsx
            ├── sidebar.jsx
            ├── skeleton.jsx
            ├── sonner.jsx
            ├── table.jsx
            └── tooltip.jsx
    ├── hooks/
        └── use-mobile.js
    ├── lib/
        └── utils.js
    └── utils/
        ├── FormCadastroSchema.js
        └── itemsNav.js
.gitignore
components.json
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
pnpm-lock.yaml
postcss.config.mjs
README.md
```
