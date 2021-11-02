<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>




<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <%--<script type="text/javascript" src="../Scripts/jquery-3.5.0.min.js"></script>--%>
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <link href="../Content/assets/css/libs/bootstrap.min.css" rel="stylesheet" />
    <link href="../Content/assets/css/libs/all.css" rel="stylesheet" />
    <link href="../Content/assets/css/libs/lightslider.css" rel="stylesheet" />
    <link href="../Content/assets/css/libs/jquery-ui.css" rel="stylesheet" />

    <link href="../Content/assets/css/main.css" rel="stylesheet" />

    <!-- Add your JavaScript to the following file -->
    <script src="../Scripts/pnp.min.js"></script>
    <script src="../Scripts/common.js"></script>
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script src="../Scripts/components.js"></script>
    <!-- page scripts -->
    <script src="../Content/assets/js/libs/jquery.min.js"></script>
    <script src="../Content/assets/js/libs/jquery-ui.min.js"></script>
    <script src="../Content/assets/js/libs/lightslider.js"></script>
    <script src="../Content/assets/js/main.js"></script>

</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">


     <div class="main-container">
    <div class="container">
      <!-- Home page content -->
      <div class=" mt-4 p-5 pt-4 home-page-container position-relative">

        <!-- start of weather section -->
        <div class="weather mb-3 text-right pointer">
          <img alt="" src="../Content/assets/img/dummy/weatherIcon.png" />
          <span class="text-primary degree" id="degree">30 °C</span>
          <span id="place">Sunny, Doha</span>
          <i class="fas fa-caret-right text-primary"></i>
        </div>

        <!-- button of showing the responsive menue into mobile scale -->
        <button class="btn btn-link menue-controler d-block d-md-none position-absolute">
          <i class="fas fa-bars"></i>
        </button>

        <div class="row">
          <div class="col-lg-2 col-md-3 p-0 mb-3 mb-md-0">

            <!-- the LHS side bar -->
           <aside class="main-side-bar pt-4 pb-4 pr-0 text-center flex-column h-100 position-relative">
             <!-- Logo -->
            <a href="#">
              <img class="w-75 mb-4 logo" alt="QTERMINALS" src="../Content/assets/img/QTerminalsLogo.png" />
            </a>
            <!-- start of profile summary section -->
            <section class="profile-summary">
              <img alt="Bushra Khan" src="../Content/assets/img/dummy/profilePhoto.jpg" />
              <h1 class="profile-name mb-1 text-capitalize bold mt-3">bushra khan</h1>
              <h2 class="profile-role text-light mb-0">UI / UX Designer</h2>
              <button class="btn btn-outline-primary pt-1 pb-1 mt-3">Dashboard</button>
            </section>

            <!-- start of navigation menue for desctop scale -->
            <nav class="navbar d-none d-md-block">
              <ul class="navbar-nav w-100 text-capitalize p-4">
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">about us</a>
                </li>
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">department</a>
                </li>
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">media center</a>
                </li>
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">document library</a>
                </li>
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">project center</a>
                </li>
                <li class="nav-item bord-btm">
                  <a class="nav-link text-light" href="#">services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#">contacts</a>
                </li>
              </ul>
            </nav>

            <!-- start of feedback section -->
            <section class="feedback-container position-absolute  d-none d-md-block">
              <p>Your opinion matters. Let us know what you think.</p>
              <button class="btn btn-primary">Feedback Form</button>
            </section>

           </aside>
          </div>
          <div class="col-lg-10 col-md-9 pr-0 col-sm-12 page-content">

            <!-- start of pahe main cover section -->
            <section class="main-cover position-relative">
              <img class="cover-photo w-100 h-100" alt="Cover" id="imgBanner" src="../Content/assets/img/dummy/mainCover.jpg" />
              <div class="cover-overlay position-absolute w-100 h-100 d-flex align-items-center">
                <div class="cover-quotes col-lg-4 col-md-7 col-sm-11 position-relative">
                  <i class="fas fa-quote-right quotes-icon position-absolute"></i>
                  <p>Many of life’s failures are people who did not realize how close they were to success when they gave up.</p>
                  <button class="btn btn-link p-0">Thomas A. Edison</button>
                  <i class="fas fa-quote-right quotes-icon position-absolute"></i>
                </div>
              </div>
            </section>



            <div class="row">
              <div class="col-lg-8 col-md-12 col-sm-12">

                <!-- start of searh section -->
                <section class="portal-search pl-20">
                  <form class="position-relative">
                    <input type="text" class="form-control search-control" placeholder="Search portal here with keywords" />
                    <i class="search-icon fas fa-search text-primary position-absolute"></i>
                  </form>
                </section>

                <!-- start of departments section -->
                <section class="departments large-slider pl-20 mt-5">
                  <div id="depts" class="content-slider" items-per-page="6">
                 
                  </div>
                </section>

                <!-- strat of recent updates section -->
                <section class="recent-updates pl-20 mt-5">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <div class="main-heading">Recent Updates</div>
                      <p class="text-light">Find all the latest news and updates here</p>
                    </div>
                    <button class="btn btn-primary">Read all updates</button>
                  </div>
                  <div class="updates-container large-slider p-3 mt-3">
                    <div id="news" class="content-slider" items-per-page="4">
                      
                    </div>
                  </div>
                </section>

                <div class="row pl-20 mt-5">

                  <!-- start of calender section -->
                  <div class="col-lg-5 col-md-12 col-sm-12">
                    <div id="datepicker"></div>
                  </div>

                  <!-- start of performance section -->
                  <div class="col-lg-7  col-md-12 col-sm-12">
                    <div class="main-heading mt-3">OUR PERFORMACE</div>
                    <div id="performance" class="row our-performance mt-4">
                      
                    </div>
                  </div>

                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">

                <!-- start of hotline numbers section -->
                <section class="hotline-numbers p-3 pt-0">
                  <div class="main-heading position-relative d-flex align-items-center">
                    <span class="position-relative d-inline-block handset-icon"></span> hotline numbers
                  </div>
                  <div id="title" class="d-flex justify-content-around bord-btm text-primary">
                   
                  </div>
                  <div id="hotLineNumber" class="d-flex justify-content-around bold mt-1">
                    
                  </div>
                </section>

                <!-- start of instgram feeds section -->
                <section class="instgram-feeds mt-4">
                  <div class="main-heading">Instagram Feeds</div>
                  <div class="position-relative">
                    <i class="fab fa-instagram-square instgram-icon position-absolute"></i>
                    <div class="feeds-container outline-container pb-0">
                      <div class="feed-item mb-2 d-flex">
                        <img class="w-100" alt="instgram-feeds" src="../Content/assets/img/dummy/insgram-feeds.jpg" />
                      </div>
                      <div class="feed-item mb-2 d-flex">
                        <img class="w-100" alt="instgram-feeds" src="../Content/assets/img/dummy/insgram-feeds.jpg" />
                      </div>
                    </div>
                  </div>
                </section>

                <!-- start of praying time section -->
                <section class="upcomming-pray-time position-relative p-4 mt-4">
                  <div class="cover-overlay position-absolute w-100 h-100 "></div>
                  <div class="text-center text-white position-relative">
                    <p class="mb-0">Coming Up</p>
                    <p class="main mb-0 bold">Duhur Prayer</p>
                    <p class="mb-0 bold">01.30 pm</p>
                  </div>
                </section>

                <!-- start of promotion section -->
                <section class="promotions outline-container mt-4 text-center">
                  <div class="main-heading mb-3">Promotions</div>
                  <div id="promotions" class="content-slider" items-per-page="1">
                    
                  </div>
                  <div>
                    <button class="btn btn-link mt-3">+ View all promotions</button>
                  </div>
                </section>

              </div>
            </div>
            <section class="pl-20 mt-5">
              <div class="row">

                <!-- start of new joinees section -->
                <div class="col-lg-3  col-md-12 col-sm-12 new-joinees">
                  <div class="main-heading">New Joinees</div>
                  <div id="divjoinees" class="content-slider mt-3" items-per-page="1">
                    
                  </div>
                </div>


                 


                <div class="col-lg-9  col-md-12 col-sm-12">
                  <!-- start of polls section -->
                  <section class="pl-30 polls">
                    <div class="main-heading">Today's Poll</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?</p>
                    <!-- start of polls form -->
                    <form>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rollRB" id="rollRB_option1">
                        <label class="form-check-label text-light" for="rollRB_option1">
                          Lorem ipsum dolor sit
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="rollRB" id="rollRB_option2">
                        <label class="form-check-label text-light" for="rollRB_option2">
                          Lorem ipsum 
                        </label>
                      </div>
                      <div class="actions mt-3">
                        <button type="submit" class="btn btn-primary">Send</button>
                        <button type="submit" class="btn btn-outline-primary">View Results</button>
                      </div>
                      <button class="btn btn-link p-0 mt-1">
                        <small>+  View Other Polls</small>
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </section>

            <!-- start of footer -->
            <footer class="ml-20 mt-5 d-flex justify-content-between bord-top pt-2">
              <small class="text-light">
                © 2020 All Rights Reserved. 
                <button class="btn btn-link p-0">Terms of use</button> 
                and 
                <button class="btn btn-link p-0">Privacy Policy</button>.
              </small>
              <!-- social media links -->
              <ul class="p-0">
                <li class="d-inline-block p-1 pt-0 pb-0"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li class="d-inline-block p-1 pt-0 pb-0"><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li class="d-inline-block p-1 pt-0 pb-0"><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li class="d-inline-block p-1 pt-0 pb-0"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li class="d-inline-block p-1 pt-0 pb-0"><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Responsive Menue -->
  <section class="responsive-menue position-fixed w-100 h-100 pt-5 d-none">
    <i class="fas fa-times close-menue position-absolute pointer"></i>
    <nav class="navbar text-center">
      <ul class="navbar-nav w-100 text-capitalize p-4">
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">about us</a>
        </li>
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">department</a>
        </li>
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">media center</a>
        </li>
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">document library</a>
        </li>
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">project center</a>
        </li>
        <li class="nav-item bord-btm">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mb-2 pb-2 pt-2" href="#">contacts</a>
        </li>
      </ul>
    </nav>
  </section>


</asp:Content>
