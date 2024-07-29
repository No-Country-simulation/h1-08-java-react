package io.hackathon.justina.mail.services;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;
import io.github.cdimascio.dotenv.Dotenv;
import io.hackathon.justina.utils.Enums.HTMLSize;
import io.hackathon.justina.utils.HTML;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final Resend resend;
    private final String EMAIL = Dotenv.load().get("EMAIL", "");

    public void sendEmail(String to, String subject, String email) {
        CreateEmailOptions createEmailOptions = new CreateEmailOptions.Builder().from("").build();

        try {
            CreateEmailResponse createEmailResponse = resend.emails().send(createEmailOptions);
        } catch (ResendException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendEmailValidation() {
        String subject = "Validation";
        String email = new HTML()
                .h("Validation", HTMLSize.LARGE)
                .br()
                .p("Please click on the link below to validate your email address.")
                .a("https://resend.com", "Validation")
                .br()
                .build();

        this.sendEmail(EMAIL, subject, email);
    }

}
