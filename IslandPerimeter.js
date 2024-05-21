var islandPerimeter = function(grid) {
    let perimeter = 0

    let tempCount = 0

    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col]) {
                tempCount = 4

                if(row > 0 && grid[row - 1][col]) {
                    tempCount--
                }
                if(col > 0 && grid[row][col - 1]) {
                    tempCount--
                }
                if(row < grid.length - 1 && grid[row + 1][col]) {
                    tempCount--
                }
                if(col < grid[row].length - 1 && grid[row][col + 1]) {
                    tempCount--
                }

                perimeter += tempCount
            }
        }
    }

    return perimeter
};