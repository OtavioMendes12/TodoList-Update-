# Use uma imagem base oficial do OpenJDK
FROM openjdk:21-jdk-slim

# Instale Maven
RUN apt-get update && apt-get install -y maven

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo pom.xml e outros arquivos de configuração do Maven
COPY pom.xml .

# Baixe as dependências do Maven
RUN mvn dependency:go-offline

# Copie o código fonte da aplicação
COPY src ./src

# Compile a aplicação
RUN mvn package

# Especifique o comando para rodar a aplicação
CMD ["java", "-jar", "target/your-app.jar"]