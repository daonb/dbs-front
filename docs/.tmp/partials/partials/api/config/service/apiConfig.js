(function(module) {
try {
  module = angular.module('docApp');
} catch (e) {
  module = angular.module('docApp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/api/config/service/apiConfig.html',
    '<header class="api-profile-header"><h1 class="api-profile-header-heading">apiConfig</h1><ol class="api-profile-header-structure naked-list step-list"><li>- service in module <a href="api/config">config</a></li></ol></header><div class="api-profile-description"><p>A map object for API enpoint names.</p></div><div></div>');
}]);
})();
