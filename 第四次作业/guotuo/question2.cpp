#include "SavingsAccount.h"
#include"Account.h"

int main() {
	double balance, rate;
	int years;
	cout << "输入初始余额：";
	cin >> balance;
	cout << "输入年利率：";
	cin >> rate;
	cout << "输入年数： ";
	cin >> years;

	SavingsAccount account(balance,rate,years);
	
	cout << "新的余额：" << account.getBalance() << endl;
	int choice;
	double amount;
	while (true) {
		cout << "\n***************************************************************************************";
		cout << "\n*                                  1 进行存款                                         *";
		cout << "\n*                                  2 提款                                             *";
		cout << "\n*                                  3 检查余额                                         *";
		cout << "\n*                                  4 计算总余额                                       *";
		cout << "\n*                                  5 退出：                                           *";
		cout << "\n***************************************************************************************\n";

		cin >> choice;

		switch (choice) {
		case 1:
			cout << "输入存款金额：";
			cin >> amount;
			account.credit(amount);
			cout << "当前余额：" << account.getBalance() << endl;
			break;
		case 2:
			cout << "输入要提取的金额：";
			cin >> amount;
			if (account.debit(amount)) {
			cout << "新的余额： " << account.getBalance() << endl;
			}
			break;
		case 3:
			cout << "当前余额：" << account.getBalance() << endl;
			break;
		case 4:
			cout << "余额" << years << "年后为：" << account.calculate(years) << endl;
			break;
		case 5:
			return 0;
		default:
			cout << "无效的选择。请重试。" << endl;
		}
	}
}