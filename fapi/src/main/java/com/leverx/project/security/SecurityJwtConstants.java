package com.leverx.project.security;

public class SecurityJwtConstants {

    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 5*60*60;
    public static final long EMAIL_TOKEN_SECONDS = 24*60*60;
    public static final String SIGNING_KEY = "blog123sign";
    public static final String TOKEN_PREFIX = "Bearer";
    public static final String HEADER_STRING = "Authorization";
    public static final String AUTHORITIES_KEY = "scopes";
}
