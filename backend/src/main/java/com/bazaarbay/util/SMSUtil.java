package com.bazaarbay.util;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class SMSUtil {
    private static final String ACCOUNT_SID = System.getenv("TWILIO_SID");
    private static final String AUTH_TOKEN = System.getenv("TWILIO_AUTH");
    private static final String FROM_PHONE = System.getenv("TWILIO_PHONE");

    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }

    public static void sendOTP(String toPhone, String otp) {
        Message.creator(new PhoneNumber(toPhone), new PhoneNumber(FROM_PHONE), "Your BazaarBay OTP: " + otp).create();
    }
}
