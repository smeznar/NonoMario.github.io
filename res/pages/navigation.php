    <!--Navigation-->
    <nav id="navigation" class="navbar navbar-expand-md navbar-dark fixed-top">
        <a id="navigation-nonomario" class="navbar-brand fa-border" href="/index.php">
            <b id="brand-text" class="text" style="text-align:center"></b>
        </a>
        <button class="navbar-toggler-icon navbar-toggler hidden-md-up" type="button" data-toggle="collapse"
            data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item <?php if ($CURRENT_PAGE == "Home") {?>active<?php }?>">
                    <a id="nav-home" class="nav-link text" href="/index.php"></a>
                </li>
                <li class="nav-item <?php if ($CURRENT_PAGE == "NonoMario" || $CURRENT_PAGE == "Marin") {?>active<?php }?> dropdown" style="display:inline-block">
                    <a class="nav-link dropdown-toggle text" href="#" id="dropdownId" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a id="nav-nono-mario" class="dropdown-item text" href="/nono-mario.php"></a>
                        <a id="nav-marin" class="dropdown-item text" href="/marin.php"></a>
                    </div>
                </li>
                <li class="nav-item <?php if ($CURRENT_PAGE == "AboutPiran") {?>active<?php }?>">
                    <a id="nav-about-piran" class="nav-link text" href="/about-piran.php"></a>
                </li>
                <li class="nav-item <?php if ($CURRENT_PAGE == "Reviews") {?>active<?php }?>">
                    <a id="nav-reviews" class="nav-link text" href="/reviews.php"></a>
                </li>
                <li class="nav-item">
                    <a id="nav-contact" class="nav-link text" href="#footer"></a>
                </li>
            </ul>
        </div>
    </nav>