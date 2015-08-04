angular.module('catalog', [])
    .controller('GameListCtrl', function($scope, $http) {
        $scope.formData = {};

        $http.get('/v1/games')
            .success(function(games) {
                $scope.games = games;
            })
            .error(function(data) {
                console.log('Error: ' + games);
            });

        $scope.addGame = function() {
            console.log($scope.formData);
            $http.post('/v1/games', $scope.formData)
                .success(function(data) {
                    $scope.formData.id = data.id;
                    $scope.games.push($scope.formData);
                    $scope.formData = {};
                })
                .error(function() {
                    console.log('Error adding game');
                });
        };

        $scope.deleteGame = function(game) {
            $http.delete('/v1/games/' + game.id)
                .success(function() {
                    var index = $scope.games.indexOf(game);
                    $scope.games.splice(index, 1);
                })
                .error(function() {
                    console.log('Error deleting game');
                });
        };
    });
