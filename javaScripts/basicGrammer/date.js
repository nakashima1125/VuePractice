// 現在時刻を表すインスタンスを作成
const now = new Date();
// 時刻値を獲得
console.log(Date.now());

// 時刻値を取得
console.log(now.getTime());
console.log(now.toISOString());

// 任意の時刻をミリ秒で獲得
const date = new Date(1136214245999);
console.log(date.toISOString());

const inUTC = new Date("2006-01-02T15:04:05.999Z");
console.log(inUTC.toISOString());

// new Date(year, month, day, hour, minutes, seconds, milliseconds);
const date1 = new Date(20006, 0, 2, 15, 4, 5, 999);
const date2 = new Date(2006, 2, 15, 4, 999);
console.log(date1.toISOString());
console.log(date2.toISOString());

// YYYY/MM/DD
function formatDate(date) {
  const yyyy = String(date.getFullYear());
  // stringのpadstartで2桁になるように0埋めする
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
}

const date3 = new Date("2006-01-02T15:04:05.999");
console.log(formatDate(date3));
