package io.hackathon.justina.config;

import com.resend.Resend;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ResendConfig {

    private String API_KEY;

    public ResendConfig() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMalformed().ignoreIfMissing().load();

        this.API_KEY = dotenv.get("RESEND_API_KEY", "");
    }


    @Bean
    public Resend resend() {
        return new Resend(API_KEY);
    }
}
