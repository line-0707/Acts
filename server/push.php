<?php
require 'vendor/autoload.php';

//アクセストークン取得
$client = new Google_Client();
$client->setAuthConfig('XXXXXXXXXX.json');
$client->addScope('https://www.googleapis.com/auth/firebase.messaging');
$client->refreshTokenWithAssertion();
$access_token = $client->getAccessToken();

// 送るメッセージ　tokenに登録トークンを設定
$json = '{
    "message":{
        "notification":{"title": "ここにタイトルを入力",
        "body": "ここにボディを入力"},
        "token":"★FCNトークン★"}
}';

// curlの初期化
$ch2 = curl_init(); 

// アクセストークンをhttpヘッダーに設定
$headers = array(
    'Content-Type: application/json',
    'Authorization: Bearer ' . $access_token["access_token"]
);

curl_setopt_array($ch2, array(
    CURLOPT_URL => 'https://fcm.googleapis.com/v1/projects/acts-f710f/messages:send',
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $json
));

// push送信
$response = curl_exec($ch2);

curl_close($ch2);
