import Profile from "./components/Profile";

const profile = [
  { Name: "Geo", Age: "18", Hobby: ["sports", "music"] },
  { Name: "Tom", Age: "25", Hobby: ["movie", "music"] },
  { Name: "Lisa", Age: "21", Hobby: ["sports", "travel", "game"] },
];

const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {profile.map((item) => (
          <li key={item.Name}>
            <Profile name={item.Name} age={item.Age} hobbies={item.Hobby} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
