# Desafio Full Cycle - Docker Node

OBS: está com algumas versões diferentes e com system marcado porque estava dando erro na minha máquina

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