/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    if(grid == null) {
        return 0;
    }

    if(grid.length === 0) {
        return 0;
    }
    
    const rows = grid.length;
    const cols = grid[0].length;

    let maxArea = 0;

    function dfs(r, c) {

        if(r < 0 || r >= rows || c < 0 || c >= cols) {
            return 0;
        }

        if(grid[r][c] === 0) {
            return 0;
        }

        if(grid[r][c] !== 1) {
            return;
        }

        grid[r][c] = 0;


        return ( 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r, c-1) );
    }


    for(let r = 0; r < rows; r++) {

        for(let c = 0; c < cols; c++) {

            if(grid[r][c] === 1) {

                const area = dfs(r, c);

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};