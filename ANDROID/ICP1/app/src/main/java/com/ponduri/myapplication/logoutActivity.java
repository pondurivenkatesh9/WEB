package com.ponduri.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class logoutActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_logout);
    }
    public void logout(View view) {
        Intent redirect = new Intent(logoutActivity.this, MainActivity.class);
        startActivity(redirect);
    }

}


