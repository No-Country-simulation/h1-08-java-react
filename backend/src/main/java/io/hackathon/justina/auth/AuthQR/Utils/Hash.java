package io.hackathon.justina.auth.AuthQR.Utils;

import io.github.cdimascio.dotenv.Dotenv;
import org.apache.commons.codec.binary.Base32;
import org.apache.commons.codec.digest.DigestUtils;

import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;

public class Hash {
    private static final String PRIVATE_KEY = Dotenv.load().get("PRIVATE_KEY");

    public static String getHash(String text) throws NoSuchAlgorithmException {
        String input = text + generateUniqueValue() + PRIVATE_KEY;
        String sha256hex = DigestUtils.sha256Hex(input);

        byte[] hash = sha256hex.getBytes(StandardCharsets.UTF_8);

        byte[] shortHash = new byte[8];
        System.arraycopy(hash, 0, shortHash, 0, 8);

        return new Base32().encodeAsString(shortHash).replace("=", "");
    }

    public static String generateUniqueValue() {
        return Instant.now().toString();
    }
}
