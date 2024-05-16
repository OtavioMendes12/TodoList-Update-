FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/TodoList-0.0.1-SNAPSHOT.jar.original app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]