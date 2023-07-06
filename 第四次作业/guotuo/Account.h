#ifndef ACCOUNT_H
#define ACCOUNT_H
#include<iostream>

using namespace std;
class Account {
public:
	Account()
	{
		this->balance = 0;
	}
	Account(double balance)
	{
		if(balance>=0)
		this->balance = balance;
		else
		{
			this->balance = 0;
			cout << "balance需要为非负数！";
		}
	}

	void credit(double amount)
	{
		if (amount >= 0)
			this->balance += amount;
		else
			cout << "你到底存不存钱？"<<endl;
	}

	bool debit(double amount)
	{
		if (this->balance >= amount)
		{
			this->balance -= amount;
			return true;
		}
		else
			cout << "Debit amount exceeded account balance."<<endl;
		return false;
	}

	double getBalance()
	{

		return this->balance;
	}

protected:
	double balance;
};
#endif
