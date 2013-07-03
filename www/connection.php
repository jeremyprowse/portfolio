<?php

	mysql_pconnect(DB_HOST,DB_USER,DB_PASSWORD) or

		die("ERROR".mysql_error());

	mysql_select_db(DB_NAME) or

		die("ERROR".mysql_error());