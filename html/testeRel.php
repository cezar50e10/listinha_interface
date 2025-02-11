<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "http://localhost/Projetos/biriba/API/IntegraWSBiriba/ConverteITO.php",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"DADOS\":\n\t{\n\t\t\"SERVICO_INVOCADO\":\"relatorioExtratoQRCode\",\n\t\t\"OBJETOS\":{\n\t\t\t\"ID_QRCODE\":\"22||6||2022-08-11 22:28:48||U\",\n\t\t\t\"QTD_DIA\": \"20\"\n\t\t}\n\t}\n}",
  CURLOPT_COOKIE => "PHPSESSID=egdhv38qk49dceb2baj1thdhpm",
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}