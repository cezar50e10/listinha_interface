<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.positus.global/v2/sandbox/whatsapp/numbers/814e1f43-af0b-4ecb-a3ee-719c3481fabf/messages",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\r\n  \"to\": \"+5511948705767\",\r\n  \"type\": \"text\",\r\n  \"text\": {\r\n      \"body\": \"salve salve\"\r\n  }\r\n}",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjE0MDljMmY1ZTBkN2FmYTkyNGM3NGQyYjk4NTA0MjllZGFmMTRiNTA4ODZjYzM3YTgzYjk2OWE0NWFlMDM4ZTczZWRhMDYyMGViZjAwYmEiLCJpYXQiOjE2ODI0NjM5NDUuNDU3OTg5LCJuYmYiOjE2ODI0NjM5NDUuNDU3OTkxLCJleHAiOjE3MTQwODYzNDUuNDUwOTc5LCJzdWIiOiIzMTQzMiIsInNjb3BlcyI6W119.Djax_wJL7e2JufogD-j6t4uIg2eZFB_olcBDht6OyY6ruM3wde67YGjb_UzWNrc1hnEBQ_jHWkSDz8nHwPj_O11NXP9d0rgReUNmDxmijilK15qESYheoJmTjhj5vtb5m5VEL8kCEzSezBVApdU2gMJHL65gKLmBjcIREKyoM6_FEDOw-_7sKQOaStZKOh0BSbAiZu2oU44WBluKOp_ODfhvd-Jei11Q3axMGk1b0uYorglUZMIKiGwwqoD-ZV9WeXjK-Zx5o4CaA4te4a8MgiRRs1LQqj2evt5-O2IAOgOqbBQXE-EfjJCSfY9nzn7PbiBDGyj0mohsVoO3qcslhrsuE5HeihiWSr0b1Y_wlg2iNUq2pGwjIy4TOCL7H79pEGUBlLWyS_YmTxYM0sibFLEGaQYu5iqeTcMe3q2G2zgE4RBVvGBWN3Fd7djRNWWKmXEnnXpMX1wuHvPZznbatMSQWtgLJ22TiHbF5ncgXjzHArG58VjpqfmeynRMabKahfbtQ6S0iArgzsDDez1RoSNcHB01A-1vAbG9waXMBDJimMW2JJwpGYjPOsFJkqySuqE9z6aUR_GPVYknJf7J8NoFRdfffbvBb8_Kd1yHSOAtre_O4XouQEhg9SJbd0AT7qq17SQvFNC86UG0XVF69lHfyvRYu_tceGyLxbdS9QY"
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;