<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home page | Project Opdracht</title>
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="./css/animation.css" />
    <script src="./JavaScript/script.js" defer></script>
    <link rel="icon" type="image/x-icon" href="./Assets/icons/map-marker.png" />
    <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.27/bundled/lenis.min.js"></script>
  </head>
  <body>
    <div class="sales-banner slide-bottom">
      <a href="./shop.html">Promotiecode WEBTECH30 +30%</a>
    </div>
    <header class="slide-bottom">
      <nav class="test1">
        <a href="./index.html" class="active">home</a>
        <a href="./shop.html">winkel</a>
        <a href="./contact.html">contact</a>
        <a href="./klant.html">klanten</a>
      </nav>
      <a class="logo-container" href="./index.html">
        <img src="./Assets/icons/logo-final.png" class="logo" alt="logo" />
      </a>
      <nav class="test2">
        <from action="#">
          <input class="search" type="text" name="" id="" />
        </from>
        <a href=""><img src="./Assets/icons/account.png" alt="" /></a>
        <a href=""><img id="cart" src="./Assets/icons/cart.png" alt="" /></a>
      </nav>
      <nav class="mobile">
        <a href="#"
          ><img
            src="./Assets/icons/2976215.png"
            alt="hamburger-menu"
            id="hamburger"
        /></a>
      </nav>
    </header>

    <header class="mobile-menu" id="mobile-menu">
      <nav>
        <section class="mobile-item" onclick="location.href='./index.html'">
          <a href="./index.html" class="active">home</a>
        </section>

        <section class="mobile-item" onclick="location.href='./shop.html'">
          <a href="./shop.html">winkel</a>
        </section>

        <section class="mobile-item" onclick="location.href='./contact.html'">
          <a href="./contact.html">contact</a>
        </section>
        <section class="mobile-item" onclick="location.href='./klant.html'">
          <a href="./klant.html">klanten</a>
        </section>
      </nav>
    </header>
    <main>
      <section class="hero">
        <button class="shop-btn" onclick="location.href='./shop.html'">
          artikels
        </button>

        <img
          src="Assets/img/home-test.png"
          class="banner-web slide-bottom"
          alt="banner"
        />
        <img
          src="Assets/img/banner-mobile2.png"
          alt="banner"
          class="banner-mobile slide-bottom"
        />
      </section>
      <h2 class="h2 slide-bottom">Herfst Selectie</h2>
      <section class="explore slide-bottom">
        <article class="artcl-1">
          <div class="cream"></div>
        </article>
        <article class="artcl-2">
          <div class="red-brick"></div>
        </article>
        <article class="txt">
          <h2>Red brick coat</h2>
          <br />
          <p>39,99€</p>
        </article>
        <article class="artcl-3">
          <div class="camel"></div>
        </article>
        <article class="txt2">
          <h2>Camel coat</h2>
          <br />
          <p>39,99€</p>
        </article>
      </section>
      <div class="collection-title1">
        <h2>Best verkocht</h2>
        <button class="seemore2" onclick="location.href='./shop.html'">
          Alle producten bekijken
        </button>
      </div>
      <section class="collection">
        <article class="product">
          <a
            href="./lapel-collar-coat.html"
            aria-label="Floral Spaghetti Strap Dress"
            ><div class="product-image9"></div
          ></a>
          <h4 class="productTitle">Lapel Collar Coat</h4>
          <p class="price">€59.99</p>
          <button class="btn-collection">In winkelmand</button>
        </article>
        <article class="product">
          <a
            href="./houndstooth-jacket.html"
            aria-label="Square Neck Smocked Dress"
            ><div class="product-image11"></div
          ></a>
          <h4 class="productTitle">Houndstooth Jacket</h4>

          <p class="price">€69.99</p>
          <button class="btn-collection">In winkelmand</button>
        </article>
        <article class="product">
          <a href="./ivory-coat.html" aria-label="Paisley Flounce Sleeve Dress"
            ><div class="product-image10"></div
          ></a>
          <h4 class="productTitle">Ivory Coat</h4>
          <p class="price">€49.99</p>
          <button class="btn-collection">In winkelmand</button>
        </article>
        <article class="product">
          <a href="./baseball-green-jacket.html" aria-label="One Shoulder Dress"
            ><div class="product-image12"></div
          ></a>
          <h4 class="productTitle">Baseball Green Jacket</h4>
          <p class="price">€29.99</p>
          <button class="btn-collection">In winkelmand</button>
        </article>
      </section>
      <section class="bottom-section">
        <div class="img-bottom"></div>
        <article class="newsletter2">
          <h2>Blijf geïnformeerd!</h2>
          <form action="">
            <input
              class="nl-input"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <br />
            <input class="nl-button" type="submit" value="Opsturen !" />
          </form>
        </article>
      </section>

      <h2 class="collection-title1">Over mij</h2>
      <section class="aboutPage">
        <article class="hamza">
          <img class="ik" src="./Assets/img/ik2.webp" alt="ik" />
          <h1>Hamza</h1>
          <p class="oldStudies">23-jarige voormalige ontwerpstudent</p>
          <p class="text">
            Ik kijk uit naar nieuwe uitdagingen en kansen die me in staat zullen
            stellen mijn ontwerpsensibiliteit te combineren met mijn zich
            ontwikkelende vaardigheden.
          </p>
        </article>
      </section>
    </main>

    <footer>
      <section class="footer-1">
        <p>©ontempo | 2023</p>
      </section>
      <section class="footer-2">
        <img src="./Assets/icons/github.png" alt="" />
        <img src="./Assets/icons/behance.png" alt="" />
        <img src="./Assets/icons/mail.png" alt="" />
      </section>
    </footer>
    <?php

        include_once("config.php");
        $ip_address = $_SERVER['REMOTE_ADDR'];
        $datum = date("Y-m-d H:i:s");


        $stmt = $mysqli->prepare("INSERT INTO adresses (ip_adress) VALUES (?)");
        $stmt->bind_param("s", $ip_address);
        $stmt->execute();

    ?>
  </body>
</html>
