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
            <div id="home" class="content-block">
                <!-- Carousel -->
                <div class="row no-margin">
                    <div class="col-12 no-padding">
                        <div id="carousel-home" class="carousel slide" data-ride="carousel">
                            <ol id="carousel-home-indicators" class="carousel-indicators"></ol>
                            <div id="carousel-home-pictures" class="carousel-inner" role="listbox"></div>
                            <a class="carousel-control-prev" href="#carousel-home" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel-home" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <!-- OPIS -->
                    <div id="home-text-section" class="row text-section text">
                        If text doesn't appear, try disabling the ad-blocker (temporaly problem that will be solved
                        soon hopefully)
                        <br>
                        Ce se besedilo ne prikaze poizkusite ugasniti ad-blocker za to stran (problem ki bo kmalu
                        resen)
                    </div>
                    <!-- Cards-->
                    <div class="card">
                        <div class="card-header">
                            <h4 id="nono-mario-card-header" class="card-title text">Nono Mario</h4>
                        </div>
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                        <img src="res/nono_mario/nono_mario25.jpg" alt="tukaj je slika ponavadi"
                                            class="single-image">
                                    </div>
                                    <div class="col-lg-8 col-md-6 col-sm-12">
                                        <!--   <p id="nono-mario-card-content" class="card-text text">Pridite v ta apartma, zelo je lep in nebo vam zal</p> -->
                                        <!-- Short Description-->
                                        <div class="row short-description">
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-male"></i>
                                                <p>People: 2+1</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-bed"></i>
                                                <p>Bedrooms: 1</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-wifi"></i>
                                                <p>Wi-Fi</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-tv"></i>
                                                <p>TV</p>
                                            </div>
                                        </div>
                                        <a id="nono-mario-card-button" class="btn btn-success text"
                                            href="/nono-mario.php">
                                            Oglejte si ta apartma
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 id="marin-card-header" class="card-title text">Marin</h4>
                        </div>
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                        <img src="res/marin/marin7.jpg" alt="tukaj je slika ponavadi"
                                            class="single-image">
                                    </div>
                                    <div class="col-lg-8 col-md-6 col-sm-12">
                                        <!--   <p id="marin-card-content" class="card-text text">Pridite tudi v ta apartma, ta je se novejsi, noro.</p> -->
                                        <div class="row short-description">
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-male"></i>
                                                <p>People: 4+2</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-bed"></i>
                                                <p>Bedrooms: 1</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-wifi"></i>
                                                <p>Wi-Fi</p>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 short-description-item">
                                                <i class="fa fa-tv"></i>
                                                <p>TV</p>
                                            </div>
                                        </div>
                                        <a id="marin-card-button" class="btn btn-success text"
                                            href="/marin.php">
                                            Oglejte si tudi ta apartma
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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