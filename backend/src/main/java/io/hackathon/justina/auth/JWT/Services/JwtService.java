package io.hackathon.justina.auth.JWT.Services;

import io.github.cdimascio.dotenv.Dotenv;
import io.hackathon.justina.config.DotenvConfig;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service

public class JwtService {

    private  final String SECRET_KEY;

    public JwtService() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMalformed().ignoreIfMissing().load();
        SECRET_KEY = dotenv.get("JWT_KEY_SECRET","S5fIdOyuMKiUq9dXxeqharYauUeMj1yPbMKRlbxp");
    }

    public String getToken(UserDetails userDetails) {
       return getToken(new HashMap<>() , userDetails);
    }

    private String getToken(Map<String, Object> claims, UserDetails user) {
        return Jwts.builder().setClaims(claims)
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(
                        System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(getKey(), io.jsonwebtoken.SignatureAlgorithm.HS256).compact();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String email = getEmailFromJwtToken(token);
        return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Key getKey() {
        byte[] byteKey = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(byteKey);
    }

    public String getEmailFromJwtToken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    public <T> T getClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Date getExpiration(String token) {
        return getClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token) {
        return getExpiration(token).before(new Date());
    }
}