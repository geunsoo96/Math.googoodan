console.log("test");

for (let i = 2; i <= 9; i++) {
  // i를 2부터 9까지 반복문으로 출력
  console.log(i + "단");
  for (let j = 1; j <= 9; j++) {
    // j는 1부터 9까지 출력
    console.log(i + "*" + j + "=" + i * j);
    // i --> 2부터, j --> 부터 순서대로 = (i 곱하기 j)
  }
}
