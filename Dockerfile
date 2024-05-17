FROM openjdk:21-jdk-slim
COPY /target/TodoList-0.0.1-SNAPSHOT.jar.original /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
