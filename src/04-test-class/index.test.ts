import { SynchronizationFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  const account = getBankAccount(500);
  const anotherAccount = getBankAccount(100);

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(500);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const value = 555;
    const balance = account.getBalance();

    const result = () => account.withdraw(value);

    expect(result).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const balance = account.getBalance();
    const value = 555;

    const result = () => account.transfer(value, anotherAccount);

    expect(result).toThrow(
      `Insufficient funds: cannot withdraw more than ${balance}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const value = 555;

    const result = () => account.transfer(value, account);

    expect(result).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    const value = 100;
    const startBalance = account.getBalance();

    account.deposit(value);

    const finishBalance = account.getBalance();

    expect(finishBalance).toBe(startBalance + value);
  });

  test('should withdraw money', () => {
    const value = 50;
    const startBalance = account.getBalance();

    account.withdraw(value);

    const finishBalance = account.getBalance();

    expect(finishBalance).toBe(startBalance - value);
  });

  test('should transfer money', () => {
    const value = 50;
    const startBalance = account.getBalance();

    account.transfer(value, anotherAccount);

    const finishBalance = account.getBalance();

    expect(finishBalance).toBe(startBalance - value);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const result = await account.fetchBalance();

    if (result) {
      expect(typeof result).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const value = 55;

    jest.spyOn(account, 'fetchBalance').mockResolvedValue(value);

    await account.synchronizeBalance();
    const balance = account.getBalance();

    expect(balance).toBe(value);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);

    await expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
