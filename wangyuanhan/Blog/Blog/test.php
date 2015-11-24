<?php
if(!filter_var("гм", FILTER_SANITIZE_EMAIL))
{
	echo "E-mail is not valid";
}
else
{
	echo "E-mail is valid";
}