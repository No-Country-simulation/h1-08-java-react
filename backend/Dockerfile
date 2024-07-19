FROM openjdk:17-jdk-alpine
WORKDIR /app
ARG JAR_FILE=target/justina-1.0.0.jar
COPY ${JAR_FILE} /app/justina-1.0.0.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","justina-1.0.0.jar"]
