package io.hackathon.justina.auth.models.auth;

import lombok.EqualsAndHashCode;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.SpringSecurityCoreVersion;

import java.io.Serial;
import java.util.Collection;

@EqualsAndHashCode(callSuper = false)
public class EmailPasswordAuthenticationToken extends AbstractAuthenticationToken {
    @Serial
    private static final long serialVersionUID = SpringSecurityCoreVersion.SERIAL_VERSION_UID;
    private final transient Object emailKey;
    private final transient Object credentials;

    public EmailPasswordAuthenticationToken(String email, String password) {
        super(null);
        this.emailKey = email;
        this.credentials = password;
        this.setAuthenticated(false);
    }

    public EmailPasswordAuthenticationToken(String email, String password, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.emailKey = email;
        this.credentials = password;
        super.setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return this.credentials;
    }

    @Override
    public Object getPrincipal() {
        return this.emailKey;
    }

}
