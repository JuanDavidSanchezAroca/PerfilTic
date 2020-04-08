FROM openjdk:8-jdk-alpine
EXPOSE 8080
COPY target/ProductStore-0.0.1-SNAPSHOT.jar /app/app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=default","-jar", "/app/app.jar"]