<?php

	session_set_cookie_params(0); // cookie to be destroy when browser is closed
	session_start();
	header('Cache-control: private'); // IE 6 FIX

	if(isSet($_GET['lang']))
		{
			$lang = $_GET['lang'];

			// register the session and set the cookie
			$_SESSION['lang'] = $lang;
			setcookie('lang', $lang);
		}
	else if(isSet($_SESSION['lang'])){
			$lang = $_SESSION['lang'];
		}
	else
		{
			$lang =  substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2); // same lang as the user browser
		}

	switch ($lang) {

	  case 'en':
	  $lang_file = 'en.php';
	  break;

	  case 'fr':
	  $lang_file = 'en.php';
	  $lang = 'en';
	  break;

	  default:
	  $lang_file = 'en.php';

	}

	include_once $lang_file;

?>
