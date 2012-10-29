function MastermindController($scope) {
    $scope.colorIndex = 0;
    $scope.guesses = [];
    $scope.solved = false;
    $scope.colors = [
        {id:'0', name:'Red', btn:' btn-danger'},
        {id:'1', name:'Yellow', btn:'btn-warning'},
        {id:'2', name:'Green', btn:'btn-success'},
        {id:'3', name:'Black', btn:'btn-inverse'},
        {id:'4', name:'White', btn:''},
        {id:'5', name:'Blue', btn:'btn-primary'}
    ];
    $scope.generateRandomCode = function () {
        var randomCode1 = Math.floor((Math.random() * 6));
        var randomCode2 = Math.floor((Math.random() * 6));
        var randomCode3 = Math.floor((Math.random() * 6));
        var randomCode4 = Math.floor((Math.random() * 6));
        $scope.secretCode = {column1:$scope.colors[randomCode1], column2:$scope.colors[randomCode2], column3:$scope.colors[randomCode3], column4:$scope.colors[randomCode4]};
    }
    $scope.color1Selected = function () {
        if ($scope.color1Select) {
            $scope.color1HiddenSelected = $scope.colors[$scope.color1Select];
        }
    }
    $scope.color2Selected = function () {
        if ($scope.color2Select) {
            $scope.color2HiddenSelected = $scope.colors[$scope.color2Select];
        }
    }
    $scope.color3Selected = function () {
        if ($scope.color3Select) {
            $scope.color3HiddenSelected = $scope.colors[$scope.color3Select];
        }
    }
    $scope.color4Selected = function () {
        if ($scope.color4Select) {
            $scope.color4HiddenSelected = $scope.colors[$scope.color4Select];
        }
    }

    $scope.startAgain = function () {
        $scope.guesses = [];
        $scope.showAnswerVar = false;
        $scope.numberOfGuesses = 0;
        $scope.solved = false;
    }
    $scope.numberOfGuesses = 0;
    $scope.placeGuess = function () {

        var numberOfBlacks = 0;
        var numberOfWhites = 0;
        var secretCode = $scope.secretCode;
        var secretColumn1 = secretCode.column1;
        var secretColumn2 = secretCode.column2;
        var secretColumn3 = secretCode.column3;
        var secretColumn4 = secretCode.column4;


        if ($scope.color1HiddenSelected.name == secretColumn1.name) {
            numberOfBlacks++;
        } else if ($scope.color1HiddenSelected.name == secretColumn2.name || $scope.color1HiddenSelected.name == secretColumn3.name || $scope.color1HiddenSelected.name == secretColumn4.name) {
            numberOfWhites++;
        }

        if ($scope.color2HiddenSelected.name == secretColumn2.name) {
            numberOfBlacks++;
        } else if ($scope.color2HiddenSelected.name == secretColumn1.name || $scope.color2HiddenSelected.name == secretColumn3.name || $scope.color2HiddenSelected.name == secretColumn4.name) {
            numberOfWhites++;
        }

        if ($scope.color3HiddenSelected.name == secretColumn3.name) {
            numberOfBlacks++;
        } else if ($scope.color3HiddenSelected.name == secretColumn2.name || $scope.color3HiddenSelected.name == secretColumn1.name || $scope.color3HiddenSelected.name == secretColumn4.name) {
            numberOfWhites++;
        }

        if ($scope.color4HiddenSelected.name == secretColumn4.name) {
            numberOfBlacks++;
        } else if ($scope.color4HiddenSelected.name == secretColumn2.name || $scope.color4HiddenSelected.name == secretColumn3.name || $scope.color4HiddenSelected.name == secretColumn1.name) {
            numberOfWhites++;
        }

        var guessNumber = $scope.numberOfGuesses++;
        $scope.guesses.push({guessNumber:guessNumber, column1:$scope.color1HiddenSelected, column2:$scope.color2HiddenSelected, column3:$scope.color3HiddenSelected, column4:$scope.color4HiddenSelected, numberOfWhites:numberOfWhites, numberOfBlacks:numberOfBlacks});
        if (numberOfBlacks == 4) {
            $scope.solved = true;
            $scope.showAnswerVar=true;
        }
    }
    $scope.showAnswerVar = false;
    $scope.showAnswer = function () {
        $scope.showAnswerVar = true;
    }

}