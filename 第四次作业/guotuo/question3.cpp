#include <iostream>
#include <iomanip>

using namespace std;

int board[19][19] = { 0 };  // 棋盘,全0初始化 

void present()
{
    for (int i = 0; i < 19; i++)
    {
        for (int j = 0; j < 19; j++)
        {
            cout << setw(3) << board[i][j];
        }
        cout << endl;
    }
}
// 检查是否有五颗子连在一起 
bool checkWin(int color)
{
    // 横向检查
    for (int i = 0; i < 19; i++) {
        int count = 0;
        for (int j = 0; j < 19; j++) {
            if (board[i][j] == color)
                count++;
            else count = 0;
            if (count == 5)
                return true;
        }
    }

    // 纵向检查 
    for (int j = 0; j < 19; j++) {
        int count = 0;
        for (int i = 0; i < 19; i++) {
            if (board[i][j] == color)
                count++;
            else count = 0;
            if (count == 5)
                return true;
        }
    }

    // 正对角线检查
    for (int i = 0; i < 15; i++) {
        int count = 0;
        for (int j = 0; j < 15; j++) {
            if (board[i + j][j] == color)
                count++;
            else count = 0;
            if (count == 5)
                return true;
        }
    }

    // 反对角线检查
    for (int i = 0; i < 15; i++) {
        int count = 0;
        for (int j = 19 - 1; j > 3; j--) {
            if (board[i + j][j] == color)
                count++;
            else count = 0;
            if (count == 5)
                return true;
        }
    }

    return false;
}

void putStone(int x, int y, int color)
{
    while (board[x][y] != 0 || x < 0 || y < 0)
    {
        cout << "你会不会玩？重新输入！(重复落点或无效落点)" << endl;
        cin >> x >> y;
    }
    board[x][y] = color;

    if (checkWin(color)) {
        if (color == 1)
            cout << "白子赢!" << endl;
        else
            cout << "黑子赢!" << endl;
    }
}

int main() {
    int x, y, x1, y1;  // 声明黑棋x和y变量与白旗x1和y1变量 
    while (true) {
        // 放置黑白棋子,直到有人赢棋
        cout << "请输入黑方下棋坐标(x,y):" << endl;
        cin >> x >> y;
        putStone(x, y, -1);
        present();
        if (checkWin(-1))
        {
            break;
        }
        cout << "请输入白方下棋坐标(x,y):" << endl;
        cin >> x1 >> y1;
        putStone(x1, y1, 1);
        present();
        if (checkWin(1)) {
            break;
        }
        cout << "尚未有人赢棋!" << endl;
    }
}