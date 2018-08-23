
package org.blankapp.progresshud;

import android.graphics.Color;
import android.os.Handler;
import android.widget.ImageView;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.kaopiz.kprogresshud.KProgressHUD;

public class RNProgressHudModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private KProgressHUD hud;

    public RNProgressHudModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNProgressHud";
    }

    @ReactMethod
    public void show(String status) {
        hud = KProgressHUD.create(getCurrentActivity());
        if (status != null && !status.isEmpty()) {
            hud.setLabel(status);
        }
        hud.show();
    }

    @ReactMethod
    public void showInfo(String status) {
        ImageView imageView = new ImageView(getCurrentActivity());
        imageView.setBackgroundResource(R.mipmap.info);

        hud = KProgressHUD.create(getCurrentActivity())
                .setCustomView(imageView)
                .setLabel(status);
        hud.show();
    }

    @ReactMethod
    public void showSuccess(String status) {
        ImageView imageView = new ImageView(getCurrentActivity());
        imageView.setBackgroundResource(R.mipmap.success);

        hud = KProgressHUD.create(getCurrentActivity())
                .setCustomView(imageView)
                .setLabel(status);
        hud.show();
    }

    @ReactMethod
    public void showError(String status) {
        ImageView imageView = new ImageView(getCurrentActivity());
        imageView.setBackgroundResource(R.mipmap.error);

        hud = KProgressHUD.create(getCurrentActivity())
                .setCustomView(imageView)
                .setLabel(status);
        hud.show();
    }

    @ReactMethod
    public void showProgress(Float progress, String status) {
        if (hud == null) {
            hud = KProgressHUD.create(getCurrentActivity())
                    .setStyle(KProgressHUD.Style.BAR_DETERMINATE)
                    .setMaxProgress(100)
                    .setLabel(status);
        }
        hud.setProgress(progress.intValue());
        if (!hud.isShowing()) {
            hud.show();
        }
    }

    @ReactMethod
    public void dismiss(Integer delay) {
        int delayMillis = delay != null ? delay.intValue() : 0;
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                if (hud != null) {
                    hud.dismiss();
                    hud = null;
                }
            }
        }, delayMillis);
    }


}