package com.bazaarbay.util;

import com.bazaarbay.model.User;

public class JSONUtil {
    public static String createSuccessLogin(User user) {
        return String.format("{\"message\":\"Login successful\",\"role\":\"%s\",\"userId\":%d}",
                user.getRole(), user.getUserId());
    }
}
