var app = angular.module('employeeApp', ['ngRoute', 'ngCookies','ngFileUpload','ui.bootstrap']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'slideShowController',
    templateUrl: './partials/contact.html'
  }).when('/login', {
    controller: 'loginController',
    templateUrl: './partials/front.html'
  }).when('/admin/list', {
    controller: 'listController',
    templateUrl: './partials/list.html'
  }).when('/admin/add-member', {
    controller: 'adminController',
    templateUrl: './partials/addMember.html'
  }).when('/admin/add-program', {
    controller: 'programController',
    templateUrl: './partials/addProgram.html'
  }).when('/admin/list/:id', {
    controller: 'listController',
    templateUrl: './partials/list.html'
  }).when('/user-home', {
    controller: 'userController',
    templateUrl: './partials/user.html'
  }).when('/logout', {
    controller: 'loginController',
    templateUrl: './partials/front.html'
  }).when('/user-home/personal', {
    controller: 'userController',
    templateUrl: './partials/user.html'
  }).when('/user-home/education', {
    controller: 'userController',
    templateUrl: './partials/education.html'
  }).when('/user-home/account', {
    controller: 'userController',
    templateUrl: './partials/account.html'
  }).when('/search', {
    controller: 'searchController',
    templateUrl: './partials/search.html'
  }).when('/search/:id', {
    controller: 'searchedController',
    templateUrl: './partials/searched.html'
  }).when('/change-password', {
    controller: 'changePasswordController',
    templateUrl: './partials/changePassword.html'
  }).when('/user-home/program', {
    controller: 'programController',
    templateUrl: './partials/program.html'
  }).when('/gallery', {
    controller:'slideShowController',
    templateUrl: './partials/home.html'
  }).when('/forgot-password', {
    controller: 'forgotPasswordController',
    templateUrl: './partials/forgotPassword.html'
  }).when('/reset-password/:id', {
    controller: 'resetPasswordController',
    templateUrl: './partials/resetPassword.html'
  }).when('/admin-home', {
    controller: 'adminController',
    templateUrl: './partials/admin.html'
  });
});

