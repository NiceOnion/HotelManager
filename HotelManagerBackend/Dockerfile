FROM adoptopenjdk:11-jre-hotspot

VOLUME /tmp

COPY target/HotelManager-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]