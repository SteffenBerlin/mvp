angular.module('habitizer.myCommitments', [])

    .controller('myCommitmentsController', function($scope) {

      $scope.coms = [{name: "No Facebook", points: 3},
                     {name: ">30min running", points: 6},
                     {name: "playing piano >30min", points: 5},
                     {name: "train touch typing >15 min", points: 4},
                     {name: "write a blog post", points: 6},
                     {name: "train moonwalk", points: 2}];

      $scope.todosUnmarked = [];

      $scope.todosMarked = [];

      $scope.dayScore = 0;

      $scope.dailyGoal = 13;

      $scope.daySuccess = 'No';

      $scope.calculate = function(){
        var sum = 0;
        for(var i = 0; i < $scope.todosMarked.length; i++) {
          sum += $scope.todosMarked[i].points;
        }
        $scope.dayScore = sum;
        if(sum > $scope.dailyGoal){
          $scope.daySuccess = 'Yes';
        }
      }

      $scope.addOne = function(i){
        var newTodo = $scope.coms[i];
        $scope.todosUnmarked.push(newTodo);
        $scope.coms.splice(i, 1);
      }

      $scope.mark = function(i){
        // console.log($scope.todosUnmarked);
        // console.log($scope.todosMarked);
        var todo = $scope.todosUnmarked[i];
        $scope.todosMarked.push(todo);
        $scope.todosUnmarked.splice(i, 1);
        $scope.calculate();
        console.log($scope.dayScore);
      }

      // $scope.changeClass = function(){
      //   if ($scope.class === "unmarked")
      //     $scope.class = "marked";
      //   else
      //     $scope.class = "unmarked";
      // };
});