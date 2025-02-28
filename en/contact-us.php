<?php include 'header.php';?>

<body>
  <div id="Top" class="back-to-top-container">
    <div class="back-to-top-button-container">
      <a href="#Top" class="button-round button-round-small w-inline-block">
        <img src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e10d_icon-chevron-up.svg" alt="" />
        </a>
      </div>
  </div>
  <?php
  include'nav.php';
  ?>
  <div class="search-modal">
    <img src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e121_icon-x.svg" alt="" class="search-modal-cross" />
    <div class="container-large">
      <h4 class="large-heading">Search</h4>
      
      
      <form action="#" class="form-horizontal w-form">
        <input class="form-input w-input"
          maxlength="256" name="query" placeholder="Type Keywords" type="search" id="search" required="" />
          <input type="submit" class="button form-horizontal-button w-button" value="Search" />
      </form>
    </div>
  </div>
  <div class="page-wrapper">
    <div class="section bg-gray-4">
      <div class="main-container">
        <div class="container-large">
          <div class="home-modification-handyman-services">Contact Craftsmen Who Care</div>
          <h1 class="display-heading-2">Contact Us</h1>
        </div>
      </div>
    </div>
    <div class="section no-top-padding bg-gray-4">
      <div class="main-container">
        <div class="w-layout-grid grid-halves align-top">
          <div class="container-large align-center">
            <div class="form-block w-form">
              
            <form id="wf-form-Contact-Us-Contact-Page" name="wf-form-Contact-Us-Contact-Page"
                data-name="Contact Us (Contact Page)" method="post" action="process-form.php"
                class="form-grid-halves">
          <div>
                  <label for="First-Name" class="text-small form-input-label">First Name <span class="text-danger">*</span></label>
                  <input class="form-input w-input" maxlength="256"
                    name="First-Name-3" data-name="First Name 3" placeholder="" type="text" id="First-Name-3"
                    required="" />
                  </div>
                <div><label for="Last-Name" class="text-small form-input-label">Last Name <span
                      class="text-danger">*</span></label>
                      <input class="form-input w-input" maxlength="256"
                    name="Last-Name-3" data-name="Last Name 3" placeholder="" type="text" id="Last-Name-3" required="" />
                  </div>
                <div id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d14-87d0e2c9"><label for="Email-Address-2"
                    class="text-small form-input-label">Email Address <span class="text-danger">*</span></label>
                    <input class="form-input w-input" maxlength="256" name="Email-Address-2" data-name="Email Address 2"
                    placeholder="" type="email" id="Email-Address-2" required="" />
                  </div>
                <div id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d0e-87d0e2c9"><label for="Phone"
                    class="text-small form-input-label">Phone <span class="text-danger">*</span></label>
                    <input class="form-input w-input" maxlength="256" name="Phone-2" data-name="Phone 2" placeholder=""
                    type="tel" id="Phone-2" required="" />
                  </div>
                <div id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d1a-87d0e2c9"><label for="Address"
                    class="text-small form-input-label">Address</label>
                    <input class="form-input w-input" maxlength="256"
                    name="Address" data-name="Address" placeholder="" type="text" id="Address" />
                  </div>
                <div><label for="Email-Address-2" class="text-small form-input-label">State <span
                      class="text-danger">*</span></label>
                  <div class="select-field">
                    <select id="State-4" name="State-4" data-name="State 4" required=""
                      class="select-field-unstyled w-select">
                      <option value="Another option">Select State</option>
                      <option value="Alabama">Dubai</option>
                      <option value="Alaska">Sharjah</option>
                      <option value="Arizona">Abu Dhabi</option>
                      <option value="Arkansas">Ajman</option>
                      <option value="California">Ras Al Khaimah</option>
                      <option value="Colorado">Fujairah</option>
                      
                    </select></div>
                </div>
                <div><label for="Zip-Code" class="text-small form-input-label">Zip Code <span
                      class="text-danger">*</span></label><input class="form-input w-input" maxlength="256"
                    name="Zip-Code-2" data-name="Zip Code 2" placeholder="" type="text" id="Zip-Code-2" required="" />
                </div>
                <div id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d28-87d0e2c9"><label for="Email-Address-2"
                    class="text-small form-input-label">Are you a new client? <span class="text-danger">*</span></label>
                  <div class="select-field"><select id="Are-you-a-new-client" name="Are-you-a-new-client"
                      data-name="Are you a new client?" class="select-field-unstyled w-select">
                      <option value="">Select one...</option>
                      <option value="Yes">Yes, I am a potential new client.</option>
                      <option value="No">No, I am a current existing client.</option>
                      <option value="Neither">I am neither</option>
                    </select></div>
                </div>
                <div id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d1e-87d0e2c9">
                  <label for="How-May-We-Help-You" class="text-small form-input-label">How May We Help You?</label>
                    <input class="form-input w-input" maxlength="256" name="How-May-We-Help-You" data-name="How May We Help You?" placeholder="" type="text" id="How-May-We-Help-You" />
                  </div>
                    <label id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d2f-87d0e2c9" class="w-checkbox selectable-field">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox">

                  </div>
                  <input  id="HandyPro-Newsletter" type="checkbox" name="HandyPro-Newsletter" data-name="HandyPro Newsletter"  style="opacity:0;position:absolute;z-index:-1" />
                    <span for="HandyPro-Newsletter"  class="selectable-label w-form-label">Purple Bricks Newsletter</span>
                </label>
                <label id="w-node-_49eb7f2a-8ae9-b999-8965-2f828dc4b2c5-87d0e2c9"  class="w-checkbox selectable-field">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox">
                  </div>
                  <input   id="50-Gift-Certificate" type="checkbox" name="50-Gift-Certificate" data-name="AED100 Gift Certificate"  style="opacity:0;position:absolute;z-index:-1" />
                    <span for="50-Gift-Certificate"  class="selectable-label w-form-label">I would like to instantly receive a AED100 Gift Certificate for any job over AED1000! (For participating locations only)</span>
                </label><label id="w-node-_9b2618ad-2e82-bfbd-f6d0-93a3ae1ba9d9-87d0e2c9"  class="w-checkbox selectable-field">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox">
                  </div>
                  <input type="checkbox"  name="I-agree-to-receive-messaging" id="I-agree-to-receive-messaging" data-name="I agree to receive messaging" style="opacity:0;position:absolute;z-index:-1" />
                    <span for="I-agree-to-receive-messaging" class="selectable-label w-form-label">I agree to receive  messaging from PurpleBricks at the phone number provided above. Data rates may apply, reply STOP to opt
                    out.</span>
                </label><input type="submit" data-wait="Please wait..." id="w-node-f116c3ad-ea31-d300-24a9-7809979f8d35-87d0e2c9" class="button w-button" value="Submit" />
              </form>
              <div class="form-success w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="form-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="container-small align-center">
            <div class="w-layout-grid contact-grid-vertical">
              <div class="justify-content-left">
                <h4>Get in touch</h4>
                <p>Reach out to us today to begin customizing a solution for your home or business.</p>
              </div>
              <div class="justify-content-left hide">
                <h4>Address</h4>
                <p>1821 23rd Street,<br />Noe Valley, San Francisco<br />California</p>
                <div class="w-layout-grid list-grid-vertical"><a href="#" class="horizontal-link w-inline-block"><img
                      src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e128_envelope-small.svg"
                      alt="" class="horizontal-link-icon" />
                    <div>support@spark.io</div>
                  </a><a href="#" class="horizontal-link w-inline-block"><img
                      src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e261_phone-2-small.svg"
                      alt="" class="horizontal-link-icon" />
                    <div>1800 832 993</div>
                  </a></div>
              </div>
              <div class="justify-content-left">
                <h4>Social Media</h4>
                <div class="social-media-buttons">
                  <a href="#" target="_blank" class="button-round button-round-small social-media-button w-inline-block">
                    <div class="icon-embed-xxsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                        class="iconify iconify--bx" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24">
                        <path
                          d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                          fill="currentColor"></path>
                      </svg></div>
                  </a>
                  <a href="#" target="_blank"
                    class="button-round button-round-small social-media-button w-inline-block">
                    <img src="https://cdn.prod.website-files.com/64c93da6f9f661cffa20dfee/64c93da6f9f661cffa20e161_youtube.svg"
                      alt="" class="social-icon-small" />
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php
  include'footer.php';
  ?>