#ifndef SAVINGSACCOUNT_H
#define SAVINGSACCOUNT_H
#include "Account.h"
#include<math.h>

class SavingsAccount : public Account {
public:
	SavingsAccount(double balance, double rate, int years)
		: Account(balance), rate(rate), year(years) {}
	double calculate(int years)
	{
		this->year = years;
		return this->balance*pow(1 + rate, this->year);
	}

private:
	double rate;
	int year;
};

#endif
///接受初始余额、年利率和存款年份，计算账户经过这些存款年后账户的总余额