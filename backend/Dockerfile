FROM openjdk:17-jdk-alpine AS build

RUN apk add --no-cache maven
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY --from=build /app/target/justina-1.0.0.jar .
EXPOSE 8080

ENTRYPOINT ["java","-jar","justina-1.0.0.jar"]