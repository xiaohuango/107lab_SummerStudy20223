//该代码实现未知次数输入一行字符串，计算每行里面的sum值，遇到回车就会停止。
#include<iostream>
#include<string>

using namespace std;
int main() {
	string s;
	int sum = 0, num = 0, flag = 0;
	while (cout << "请输入任意字符串：", getline(cin, s))
	{
		if (s.empty()) {
			break;
		}
		for (int i = 0; i < s.size(); i++) {
			while (s[i] >= '0' && s[i] <= '9' && i < s.size()) {
				if (s[i - 1] == '-')
					flag = 1;
				num = s[i] - '0' + 10 * num;
				i++;
			}
			if (flag == 1)
			{
				num = -num;
			}
			sum += num;
			num = 0;
			flag = 0;
		}
		cout << "该字符串出现的数字之和：" << sum << endl;
		sum = 0;
	}
	return 0;
}

