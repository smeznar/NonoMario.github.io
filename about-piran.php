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
        <div id="about-piran" class="content-block">
                <!-- Carousel -->
                <div class="row no-margin">
                    <div class="col-12 no-padding">
                        <div id="carousel-about-piran" class="carousel slide" data-ride="carousel">
                            <ol id="carousel-about-piran-indicators" class="carousel-indicators"></ol>
                            <div id="carousel-about-piran-pictures" class="carousel-inner" role="listbox"></div>
                            <a class="carousel-control-prev" href="#carousel-about-piran" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel-about-piran" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div id="about-piran-text" class="row text-section text"></div>
                    <div class="row">
                        <div id="tartini-square" class="text-section text col-lg-6 col-md-12 col-sm-12"></div>
                        <img src="res/about_piran/tartinijev_trg.jpg" class="single-image col-lg-6 col-md-12 col-sm-12"
                            alt="Tartini Square">
                    </div>
                    <hr>
                    <div class="row">
                        <img src="res/about_piran/benecanka.jpg" class="single-image col-lg-6 col-md-12 col-sm-12" alt="Venetian House">
                        <div id="venetian-house" class="text-section text col-lg-6 col-md-12 col-sm-12"></div>

                    </div>
                    <hr>
                    <div class="row">
                        <div id="walls" class="text-section text col-lg-6 col-md-12 col-sm-12"></div>
                        <img src="res/about_piran/obzidje.jpg" class="single-image col-lg-6 col-md-12 col-sm-12" alt="City Walls">
                    </div>
                    <hr>
                    <div class="row">
                        <div id="churches" class="text-section text col-lg-6 col-md-12 col-sm-12"></div>
                        <img src="res/about_piran/cerkev_sv_jurija.JPG" class="single-image col-lg-6 col-md-12 col-sm-12"
                            alt="Church">
                    </div>
                    <hr>
                    <div class="row">
                        <div id="vicinity" class="text-section text"></div>
                        <!--<img src="res/about_piran/vicinity.jpg" class="single-image" alt="Piran">-->
                    </div>
                    <!-- Add Links and make better looking 
                    <hr>
                    <div id="more">
                        <ul>
                            <li>
                                <div class="link">
                                    <a href="https://www.slovenia.info/sl/destinacije/znamenitosti/piran-s-solinami">I
                                        FEEL SLOVENIA</a>
                                </div>
                            </li>
                        </ul>
                    </div>-->
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