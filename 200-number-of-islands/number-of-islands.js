/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    if(grid == null) {
        return 0;
    }

    if(grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;

    let count = 0;

    function dfs(r,c) {

        if(r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }

        // Not on an island
        if(grid[r][c] !== '1') {
            return;
        }

        grid[r][c] = 'X';

        dfs(r, c + 1);
        dfs(r, c - 1);
        dfs(r + 1, c);
        dfs(r - 1, c);
    }

    for(let r = 0; r < rows; r++) {

        for(let c = 0; c < cols; c++) {

            if(grid[r][c] === '1') {
                count += 1;
                dfs(r, c);
            }
        }
    }
    
    return count;
};