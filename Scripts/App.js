'use strict';
var appWebUrl;
var hostWebUrl;
var collListItem;
var categories = [];
var Questions = [];
var acountname;
var assignmentId;
var userId;




$(document).ready(function () {

    initializePage();

});


function initializePage() {
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();

    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        getUserName();
        retrieveListItems();
        getWeather();
        getPerformance();
        getHotLine();
        retrieveBanners();
        retrieveQuickLinks();
        retrieveNews();
        retrieveNewJoiness();
    });

    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        // $('#message').text('Hello ' + user.get_title());
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}
function retrieveListItems() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext  = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("Promotions");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem, 'Include(Id,PromotionsDescription, PromotionsOffer,PromotionsImage)');

    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function onQuerySucceeded(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();
    var i = 0;

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
      

        $("#promotions").append(
            `<div>
        <div class="outline-container d-inline-block">
                ${oListItem.get_item('PromotionsImage')}
              </div>
              <p class="text-primary bold mt-3 mb-0 offer">${oListItem.get_item('PromotionsOffer')}</p>
              <p class="text-light mb-0">${oListItem.get_item('PromotionsDescription')}</p>
              <button class="btn btn-link bold p-0">Read more</button>
      </div>`
        );

     
    }

    //alert(listItemInfo.toString());
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function getWeather() {
    const url = new URL('https://api.weatherapi.com/v1/current.json?key=300ef357d4164ac98a390615211910&q=Doha&aqi=no');
    (async () => {
        const response = await fetch(url.toString());
        const data = await response.json();
        $("#degree").text(data.current.feelslike_c + " °C ");
        $("#place").text(data.current.condition.text + ", " + data.location.name);
    })();
}

var collListItemPerformance;
function getPerformance() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("Performance");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemPerformance = oList.getItems(camlQuery);

    clientContext.load(collListItemPerformance, 'Include(Id, PerformanceImage,Performance)');

    clientContext.executeQueryAsync(onQuerySucceededPerformance, onQueryFailedPerformance);


}


function onQuerySucceededPerformance(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemPerformance.getEnumerator();

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
     
            $("#performance").append(`<div class="col-6 d-flex align-items-center item mb-5">
                     ${oListItem.get_item('PerformanceImage')}
                <div class="item-content">
                    <p class="text-secondary bold m-0">${oListItem.get_item('Performance')}</p>
                    <p class="text-light m-0">Vessels (Total)</p>
                </div>
               </div>`);

      
    }

    //alert(listItemInfo.toString());
}

function onQueryFailedPerformance(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}












var collListItemHotLine;
function getHotLine() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("HotLine");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemHotLine = oList.getItems(camlQuery);

    clientContext.load(collListItemHotLine, 'Include(Id, HotLineTitle,HotLine)');

    clientContext.executeQueryAsync(onQuerySucceededHotLine, onQueryFailedHotLine);


}


function onQuerySucceededHotLine(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemHotLine.getEnumerator();

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        $("#title").append(`<span>${oListItem.get_item('HotLineTitle')}</span>`);
        $("#hotLineNumber").append(`<span>${oListItem.get_item('HotLine')}</span>`);
        


    }

    //alert(listItemInfo.toString());
}

function onQueryFailedHotLine(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}










var collListItemBanners;
function retrieveBanners() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("Banners");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemBanners = oList.getItems(camlQuery);

    clientContext.load(collListItemBanners, 'Include(Id,FileRef)');

    clientContext.executeQueryAsync(onQuerySucceededBanners, onQueryFailedBanners);
}

function onQuerySucceededBanners(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemBanners.getEnumerator();
    var i = 0;

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        let imgUrl = oListItem.get_item('FileRef');

        $("#imgBanner").attr("src", imgUrl);
    }

    //alert(listItemInfo.toString());
}

function onQueryFailedBanners(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}






var collListItemQuickLinks;
function retrieveQuickLinks() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("Quick Links");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemQuickLinks = oList.getItems(camlQuery);

    clientContext.load(collListItemQuickLinks, 'Include(Id,QuickLinksImage, Title)');

    clientContext.executeQueryAsync(onQuerySucceededQuickLinks, onQueryFailedQuickLinks);
}

function onQuerySucceededQuickLinks(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemQuickLinks.getEnumerator();
    var i = 0;

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        
        $("#depts").append(`<div class="item text-center" >
               <div class="dept-photo pb-4 p-4">
                   ${oListItem.get_item('QuickLinksImage')}
                 </div>
                 <p class="mb-0 mt-2 text-light bold">${oListItem.get_item('Title')}</p>
             </div>`);

        

    }

    //alert(listItemInfo.toString());
}

function onQueryFailedQuickLinks(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}









var collListItemNews;
function retrieveNews() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("News");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemNews = oList.getItems(camlQuery);

    clientContext.load(collListItemNews, 'Include(Id,NewsImage, NewsDate, Title, NewsDescription)');

    clientContext.executeQueryAsync(onQuerySucceededNews, onQueryFailedNews);
}

function onQuerySucceededNews(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemNews.getEnumerator();
    var i = 0;

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        
        

       let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date(oListItem.get_item('NewsDate'));
        let month = months[d.getMonth()];
        let date = d.getDay() + " "+ month+ " " + d.getFullYear();
        $("#news").append(`<div class="item">
      <div class="update-cover">
      ${oListItem.get_item('NewsImage')}
      </div>
      <div class="update-content mt-3">
        <div class="font-italic">${date}</div>
        <h3 class="text-primary bord-btm pb-2 mb-2 font-italic">${oListItem.get_item('Title')}</h3>
        <p class="text-light">${oListItem.get_item('NewsDescription')}</p>
      </div>
    </div>`);

        
    }

    //alert(listItemInfo.toString());
}

function onQueryFailedNews(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}





var collListItemNewJoiness;
function retrieveNewJoiness() {
    appWebUrl = decodeURIComponent(getUrlParam("SPAppWebUrl"));
    hostWebUrl = decodeURIComponent(getUrlParam("SPHostUrl"));
    var clientContext = new SP.ClientContext(appWebUrl);
    var appContextSite = new SP.AppContextSite(clientContext, hostWebUrl);
    var hostWeb = appContextSite.get_web();
    var oList = hostWeb.get_lists().getByTitle("newJoinees");
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    collListItemNewJoiness = oList.getItems(camlQuery);

    clientContext.load(collListItemNewJoiness, 'Include(Id,NewJoineePhoto, NewJoinerName, NewJoineeDepartment)');

    clientContext.executeQueryAsync(onQuerySucceededNewJoinees, onQueryFailedNewJoinees);
}

function onQuerySucceededNewJoinees(sender, args) {

    var listItemInfo = '';
    var listItemEnumerator = collListItemNewJoiness.getEnumerator();
    var i = 0;

    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        

        
        $("#divjoinees").append(`<div class="item d-flex align-items-center">
         ${oListItem.get_item("NewJoineePhoto")}
                <div>
                    <p class="text-primary bold mb-0">${oListItem.get_item("NewJoinerName")}</p>
                    <p class="text-light mb-0">${oListItem.get_item("NewJoineeDepartment")}</p>
                </div>
             </div>`);
    
       
    }

    //alert(listItemInfo.toString());
}

function onQueryFailedNewJoinees(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


