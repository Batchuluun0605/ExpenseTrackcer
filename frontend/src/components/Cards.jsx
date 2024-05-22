export default function Cards() {
  const mockData = [
    {
      title: "Your Income",
      current: "1,200,000",
      text: "Your Income Amount",
      text2: "32% from last month",
    },
    {
      title: "Total Expense",
      current: "-1,200,000",
      text: "Your Income Amount",
      text2: "32% from last month",
    },
  ];
  return (
    <div>
      {mockData.map((el, ind) => {
        <div>
          <div className=" bg-black w-24 h-24">
            <span className="w-1 h-1 bg-green-500"></span>
            <p key={ind}>{el.title}</p>
          </div>
        </div>;
      })}
    </div>
  );
}
