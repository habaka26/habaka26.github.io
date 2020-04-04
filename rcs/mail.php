<?php

$recepient = "a.temirbayeva@kazrcs.kz";
$sitename = "RCS";

$name = trim($_POST["name"]);
$number = trim($_POST["phone"]);
$email = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $number \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
