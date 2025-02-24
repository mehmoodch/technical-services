<?php 
include 'header.php';
?>
<body>
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-container">
      <a href="#Top" class="button-round button-round-small w-inline-block">
        <img
          src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e10d_icon-chevron-up.svg"
          alt="" />
        </a>
    </div>
  </div>
  <?php
  include'nav.php';
  ?>
  <div class="mob-cta-wrapper-2">
    <a href="contact-us.php" target="_blank"
      class="button w-inline-block">
      <div> Book Now</div>
    </a></div>
  <div class="search-modal"><img
      src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e121_icon-x.svg" alt=""
      class="search-modal-cross" />
    <div class="container-large">
      <h4 class="large-heading">Search</h4>
      <form action="https://www.rashedmts.ae/search" class="form-horizontal w-form">
        <input class="form-input w-input"  maxlength="256" name="query" placeholder="Type Keywords" type="search" id="search" required="" />
          <input type="submit" class="button form-horizontal-button w-button" value="Search" />
        </form>
    </div>
  </div>
  <div class="page-wrapper bg-gray-3">
    <header id="Page-Header" class="section bg-gray-3">
      <div class="main-container">
        <div class="home-modification-handyman-services no-margin">
          <span class="text-span">Rashed</span>MTS<sup>®</sup>
          <span class="text-span"></span>
        </div>
        <h1 class="display-heading-2">Special Offers</h1>
        <div class="text-large">

        </div>
      </div>
    </header>
    <section class="breadcrumb-section grey">
      <div class="breadcrumb-wrapper">
        <a href="../index.php" class="breadcrumb-home w-inline-block">
          <div class="breadcrumb-home-svg w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <path  d="M18.6668 18.6668C18.6668 18.8878 18.579 19.0997 18.4228 19.256C18.2665 19.4123 18.0545 19.5001 17.8335 19.5001H6.16683C5.94582 19.5001 5.73385 19.4123 5.57757 19.256C5.42129 19.0997 5.3335 18.8878 5.3335 18.6668V11.1668H2.8335L11.4393 3.34343C11.5928 3.20383 11.7927 3.12646 12.0002 3.12646C12.2076 3.12646 12.4076 3.20383 12.561 3.34343L21.1668 11.1668H18.6668V18.6668ZM11.1668 12.8334V17.8334H12.8335V12.8334H11.1668Z"
                fill="currentColor" />
            </svg>
          </div>
        </a>
        <div class="breadcrumb-seperator w-embed"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L11 23.5885" stroke="currentColor" stroke-width="1.5" />
          </svg></div><a href="../our-story.php" class="breadcrumb-link w-inline-block">
          <div>About</div>
        </a>
        <div class="breadcrumb-seperator w-embed"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8L11 23.5885" stroke="currentColor" stroke-width="1.5" />
          </svg></div><a href="special-offers.php" aria-current="page"
          class="breadcrumb-link w-inline-block w--current">
          <div>Special Offers</div>
        </a>
      </div>
    </section>
    <div class="section bg-gray-4">
      <div class="main-container-2">
        <div class="video-collection w-dyn-list">
          <div class="boxed w-dyn-empty">
            <div class="w-richtext">
              <h2>Sorry, there are no specials to display at this time.</h2>
              <p>If you would like more information, you can contact us at <a href="tel:971555199753">(+971) 55 519 9753</a>.</p>
              <p>Thank you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php
    include'footer.php';
    ?>