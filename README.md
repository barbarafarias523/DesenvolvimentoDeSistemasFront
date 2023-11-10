# Frontend do Learning Path

Frontend feito com React para o learning path, projeto do estágio no LTI

## Arquivos de configuração

* Dockerfile

## Configurando a aplicação

Altere o valor da URL na linha 7 do arquivo `Dockerfile` para apontar para o host onde o backend está rodando (use o IP real do seu computador ao invés de localhost)

## Construindo a imagem

```
docker build . -t front
```

## Executando a aplicação

```
docker-compose up
```
