export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickpractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickpractice}>練習問題2の実行</button>
    </div>
  );
};
