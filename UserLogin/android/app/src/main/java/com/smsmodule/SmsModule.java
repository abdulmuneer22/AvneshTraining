package com.smsmodule;

import android.telephony.SmsManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;

public class SmsModule extends ReactContextBaseJavaModule {

    public SmsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SmsModule";
    }
    // Exposed to the bridge, accessible from javascript
    @ReactMethod
    public void send(String phoneNo, 
                      String sms, 
                      Callback success, // Callback for success 
                      Callback err) { // Callback for error
        try {
            SmsManager m = SmsManager.getDefault();
            m.sendTextMessage(phoneNo, null, sms, null, null);

            success.invoke(); // Call success callback
        } catch (Exception e) {
            err.invoke(e.getMessage());
        }
    }
}