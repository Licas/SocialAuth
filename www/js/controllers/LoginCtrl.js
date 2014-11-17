(function(){

    var LoginCtrl = function($scope){
    console.log("in login ctrl");
        hello.init({
            google : '656984324806-sr0q9vq78tlna4hvhlmcgp2bs2ut8uj8.apps.googleusercontent.com',
            facebook : '160981280706879',
            windows : '00000000400D8578'
        },{
          // Define the OAuth2 return URL
          // This can be anything you like, providing its the callback which you have registered with the providers for OAuth2
          // It could even be localhost, e.g. http://localhost/somepath as phonegap is not run from a domain so SameOrigin breaks,instead           // we take advantage of being able to read the popups URL in PhoneGap
            redirect_uri : 'http://adodson.com/hello.js/redirect.html',
            oauth_proxy: "https://auth-server.herokuapp.com/proxy"
         });
    console.log("hello initialized");
        
        $scope.loginHandler = function(r) {
            console.log("In loginHandler");
            logR(r);
            hello(r.network).api('me').on('complete', log);
        }
        
        $scope.logR = function(r){
            var s = document.createTextNode(JSON.stringify(r, null, "\t"));
            var pre = document.getElementsByTagName('pre')[0];
            pre.insertBefore(s, pre.firstChild);
        }
        
    };

    LoginCtrl.$inject = ['$scope'];

    angular.module('starter').controller('LoginCtrl',LoginCtrl);
}());