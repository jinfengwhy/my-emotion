import { useEffect, useState } from 'react';

import { Button } from 'antd';
import OneWeek from '@/components/oneweek'

import { getAll, postOne, putOne } from '@/service/modules/mood'

function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    getAll().then(res => {
      setData(res)
    })
  }, [])

//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const result = arr.reduce((acc, cur, idx) => {
//   if (idx % 7 === 0) acc.push([cur]);
//   else acc[acc.length - 1].push(cur);
//   return acc;
// }, []).map(subArr => {
//   // 在这里处理每个子数组
//   return subArr.reduce((a, b) => a + b);
// });
// console.log(result); // [28, 15]

  // const one = {
  //   "id": 89,
  //   "name": "23-08-20（周日）",
  //   "emotion": 6,
  //   "remark": "今天要宣讲了"
  // }

      // postOne(one).then(res => {
    //   console.log(`---why222: `, res);
    // })

    // putOne(89, {...one, remark: '人活一世，到底图个啥哟，你觉得刻意练习游泳吗'}).then(res => {
    //   console.log(`---why333: `, res);
    // })

  return (
    <div className="pages-dashboard">
      <h2>情绪曲线</h2>
      {/* <Button type="primary">Button</Button> */}
      <OneWeek data={data} />
    </div>
  );
}

export default Index;
