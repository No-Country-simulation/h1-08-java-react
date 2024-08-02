package io.hackathon.justina.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI(@Value("1.3.0") String springdocVersion) {
        return new OpenAPI()
                .info(new Info()
                        .title("Justina API")
                        .version(springdocVersion)
                        .description("API para la gestión de pacientes y médicos"));
    }
}
