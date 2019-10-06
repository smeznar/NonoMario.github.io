<?php include("res/pages/conf.php");?>
<!DOCTYPE html>
<html>

<head>
    <?php include("res/pages/head-tag-contents.php");?>
</head>

<body>

    <?php include("res/pages/navigation.php");?>

    <div style="background-color:#b1d3e3">
        <div id="content" class='content-style'>
        <div id="reviews" class="content-block">
                <div class="container">
                    <div id="reviews-text" class="row text-section text"></div>
                    <div class="row">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review1.jpg"
                            alt="review 1">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review2.jpg"
                            alt="review 2">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review3.jpg"
                            alt="review 3">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review4.jpg"
                            alt="review 4">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review5.jpg"
                            alt="review 5">
                        <img class="col-12 single-image image-padding" src="res/reviews_and_house_rules/review6.jpg"
                            alt="review 6">
                    </div>
                    <hr>
                    <div id="house-rules-text" class="row text-section text"></div>
                    <a href="res/reviews_and_house_rules/Hisni_red_ANG.docx" download style="padding-left: 25px;">House Rules (English)</a>
                    <br>
                    <a href="res/reviews_and_house_rules/Hisni_red_SLO.docx" download style="padding-left: 25px;">Hišna Pravila (Slovenščina)</a>
                </div>
            </div>
        </div>
    </div>

    <div id="language-dropdown" class="language-chooser">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-language"></i>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li><a id="english-lang" style="margin-left:10px" href="#">English</a></li>
            <li><a id="sloveninan-lang" style="margin-left:10px" href="#">Slovenian</a></li>
        </ul>
    </div>

    <?php include("res/pages/footer.php");?>
    <?php include("res/pages/scripts.php");?>

</body>

</html>