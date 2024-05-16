# Use uma imagem oficial do OpenJDK 21 como imagem base
FROM openjdk:21-jdk-slim

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo JAR empacotado para dentro do contêiner
COPY target/TodoList-0.0.1-SNAPSHOT.jar app.jar

# Exponha a porta em que a aplicação será executada
EXPOSE 8080

# Execute o arquivo JAR
ENTRYPOINT ["java", "-jar", "app.jar"]