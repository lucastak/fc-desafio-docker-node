# Docker Node.js + MySQL + Nginx

## 🌐 Sobre o Projeto

Este projeto configura um ambiente completo com Docker Compose para uma aplicação Node.js com MySQL e Nginx como proxy reverso. Ele é ideal para desenvolvimento local e simula uma arquitetura de produção em containers separados:

- ⚙️ **Node.js**: Aplica lógica de backend e conecta-se ao banco de dados.
- 🛢 **MySQL**: Banco de dados relacional para persistência dos dados da aplicação.
- 🌐 **Nginx**: Proxy reverso que redireciona as requisições para a aplicação Node.js, rodando na porta 3000.

O serviço Node.js aguarda a disponibilidade do banco de dados antes de iniciar, utilizando a ferramenta [dockerize](https://github.com/jwilder/dockerize).  
O Nginx é configurado para servir como ponto de entrada da aplicação, acessível pela porta `8080`.

---

## 📦 Como executar

1. Crie uma netowk para que os containers possam se comunicar:

```bash
docker network create app-node-network
```

1. Execute o comando `docker-compose` para subir os containers:

```bash
docker-compose up -d
```

3. Acesse a aplicação em seu browser (OBS: pode levar algum tempo para subir, pode gerar erro nos primeiros segundos) :

```bash
http://localhost:8080
```

Atualizando a página, um nome será adicionado no BD
