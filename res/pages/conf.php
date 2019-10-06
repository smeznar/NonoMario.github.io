<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case "/index.php":
			$CURRENT_PAGE = "Home"; 
            $PAGE_TITLE = "Home";
			break;
		case "/nono-mario.php":
			$CURRENT_PAGE = "NonoMario"; 
			$PAGE_TITLE = "Nono Mario";
            break;
        case "/marin.php":
			$CURRENT_PAGE = "Marin"; 
			$PAGE_TITLE = "Marin";
            break;
        case "/about-piran.php":
			$CURRENT_PAGE = "AboutPiran"; 
			$PAGE_TITLE = "About Piran";
            break;
        case "/reviews.php":
			$CURRENT_PAGE = "Reviews"; 
			$PAGE_TITLE = "Reviews and Rules";
			break;
		default:
			$CURRENT_PAGE = "Error";
			$PAGE_TITLE = "This page should not be visible!";
	}
?>